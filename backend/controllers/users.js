require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// const ValidationError = require('../errors/ValidationError');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');

const { JWT_SECRET_KEY = 'test' } = process.env;

module.exports.createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;

  const createUser = (hash) => User.create({
    name,
    email,
    password: hash,
  });
  bcrypt
    .hash(password, 10)
    .then((hash) => createUser(hash))
    .then((user) => {
      const { _id } = user;
      res.send({
        _id,
        name,
        email,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Пользователь с таким EMAIL уже зарегистрирован'));
      } else {
        next(err);
      }
    });
};

module.exports.patchProfile = (req, res, next) => {
  const { name, email } = req.body;

  const findAndModify = () => User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { runValidators: true },
  );
  User.find({ email })
    .then(([user]) => {
      if (user && user._id.toString() !== req.user._id) {
        // console.log(user._id === req.user._id);
        next(new ConflictError('Переданы некорректные данные'));
        // throw new ConflictError(errMessages.conflictError);
      }
      return findAndModify();
    })
    .then(() => {
      res.send({
        name,
        email,
      });
    })
    // .catch((err) => {
    //   if (err.name === 'ValidationError') {
    //     next(new ValidationError('Переданы некорректные данные'));
    //   }
    //   next(err);
    // });
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      // создать токен
      const token = jwt.sign({ _id: user._id }, JWT_SECRET_KEY, { expiresIn: '7d' });
      res.cookie('jwt', token, {
        maxAge: 3600000,
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      });
      res.send({ token });
    })
    .catch(next);
};

module.exports.getMe = (req, res, next) => {
  const { _id } = req.user;
  User.find({ _id })
    .then((user) => {
      if (!user) {
        return next(new NotFoundError('Не найден пользователь по указанному ID'));
      }
      return res.send(...user);
    })
    .catch(next);
};

module.exports.signOut = (req, res) => {
  res.cookie('jwt', '', {
    maxAge: 0,
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  });
  res.send({ message: 'Вы вышли из системы' });
};
