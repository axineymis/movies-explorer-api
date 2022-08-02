const Movie = require('../models/movie');
const ValidationError = require('../errors/ValidationError');
const NotFoundError = require('../errors/NotFoundError');
const AccessError = require('../errors/AccessError');

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  const owner = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('Не удалось создать видео'));
      } else {
        next(err);
      }
    });
};

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) next(new NotFoundError('Видео с таким ID не существует'));
      if (req.user._id !== movie.owner.toString()) throw new AccessError('Невозможно удалить чужое видео');
      Movie.findByIdAndDelete(req.params.movieId)
        .then((movieData) => {
          res.send({ data: movieData });
        })
        .catch(next);
    })
    // .catch((err) => {
    //   if (err.name === 'ValidationError' || err.name === 'CastError') next(new ValidationError('Некорректный id видео'));
    //   next(err);
    // });
    .catch(next);
};
