import React, { forwardRef } from 'react';
import avatar from '../../images/avatar.jpg';

const AboutMe = forwardRef((props, ref) => {
  return (
    <section className='about-me' id='about-me' ref={ref}>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__info-block'>
          <h3 className='about-me__name'>Наталья</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__description'>
            Родилась и живу в городе Курске. Я замужем и у меня есть дочь.
            Я люблю читать и иногда рисую. Недавно прошла курс по веб-разработке.
          </p>
          <ul className='about-me__links'>
            <li>
              <a
                className='about-me__link'
                href='https://github.com/axineymis'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className='about-me__avatar-block'>
          <img className='about-me__avatar' src={avatar} alt='аватар'></img>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;