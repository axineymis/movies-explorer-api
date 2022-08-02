import React from 'react';
import lens from '../../images/lens.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form'>
        <img className='search__icon' src={lens} alt='лупа'></img>
        <input className='search__input' type='text' name='search' placeholder='Фильм' required />
        <button className='search__button' type='submit'></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;