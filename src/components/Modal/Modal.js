import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Styles.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydownClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydownClick);
  }
  handleKeydownClick = event => {
    if (event.code === 'Escape') this.props.onKeydown();
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) this.props.onKeydown();
  };
  render() {
    return (
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={this.props.link} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  link: PropTypes.string,
  onKeydown: PropTypes.func.isRequired,
};
