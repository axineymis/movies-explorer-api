import { React } from 'react';

function NavTab() {
  return (
      <div className='navtab__links'>
        <a  href='#about-project' className='navtab__link'>
          О проекте
        </a>
        <a href='#techs' className='navtab__link'>
          Технологии
        </a>
        <a href='#about-me' className='navtab__link'>
          Студент
        </a>
      </div>
  );
}

export default NavTab;