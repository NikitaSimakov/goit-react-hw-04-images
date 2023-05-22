import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Styles.module.css';

export class ImageGalleryItem extends Component {
  handleImgClick = event => {
    console.dir(event);
  };

  render() {
    const { gallery, getLargeImg } = this.props;
    return gallery?.map(({ id, largeImageURL, webformatURL, tags }) => (
      <li
        className={css.ImageGalleryItem}
        key={id}
        onClick={() => {
          getLargeImg(largeImageURL);
        }}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItem_image}
        />
      </li>
    ));
  }
}

ImageGalleryItem.propTypes = {
  gallery: PropTypes.array,
  getLargeImg: PropTypes.func.isRequired,
};
