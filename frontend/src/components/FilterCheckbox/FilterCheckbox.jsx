import React from 'react';

function FilterCheckbox({ toggleCheckbox, checkbox }) {
  return (
    <div className='filter'>
      <button
        className={`${
          checkbox ? 'filter__checkbox' : 'filter__checkbox_active'
        }    `}
        type='button'
        onClick={toggleCheckbox}
      ></button>
      <p className='filter__films'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox; 