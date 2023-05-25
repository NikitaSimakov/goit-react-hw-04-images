import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from '../Styles.module.css';

export const Modal = ({ largeImgLink, onKeydown }) => {
  useEffect(() => {
    const handleKeydownClick = event => {
      if (event.code === 'Escape') onKeydown();
    };
    window.addEventListener('keydown', handleKeydownClick);
    return () => window.removeEventListener('keydown', handleKeydownClick);
  }, [onKeydown]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) onKeydown();
  };
  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImgLink} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  link: PropTypes.string,
  onKeydown: PropTypes.func.isRequired,
};
