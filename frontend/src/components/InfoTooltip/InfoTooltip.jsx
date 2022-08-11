import React, { useContext, useEffect } from 'react';
import { InfoToolTipContext } from '../../contexts/infotooltip-context';
import tooltip from '../../images/tooltip.png';
import imageSuccess from '../../images/success.png';


function InfoToolTip() {
  const { toolTipState, setToolTipState } = useContext(InfoToolTipContext);
  const { isOpen, message, success } = toolTipState;


  function closePopup() {
    setToolTipState({ ...toolTipState, isOpen: false, message: '' });
  }

  function removeListners() {
    document.removeEventListener('keydown', closePopupByEsc);
    document.removeEventListener('click', closePopupByOverlay);
  }

  function closePopupByEsc(e) {
    if (e.code === 'Escape') {
      removeListners();
      return closePopup();
    }
  }

  function closePopupByOverlay(e) {
    const element = e.target;
    if (element.classList.contains('popup_opened')) {
      removeListners();
      closePopup();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', closePopupByEsc);
      document.addEventListener('click', closePopupByOverlay);
    }
    return () => {
      removeListners();
    };
  }, [isOpen]);


  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className='popup__container' style={{ alignItems: 'center' }}>
        <img
          className='tooltipPic'
          style={{ width: 120, paddingTop: 60 }}
          src={success ? imageSuccess : tooltip}
          alt='Ошибка'
        ></img>
        <button
          className='popup__close-button'
          onClick={closePopup}
          type='button'
        ></button>
        <h2
          className='popup__heading'
          style={{ textAlign: 'center', margin: 36 }}
        >
          {message}
        </h2>
      </div>
    </div>
  );
}

export default InfoToolTip; 