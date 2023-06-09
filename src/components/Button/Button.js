import PropTypes from 'prop-types';
import css from '../Styles.module.css';

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
