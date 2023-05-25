import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import { getSearchImages } from 'api/SearchImageApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../Styles.module.css';

export const ImageGallery = ({
  searchQuery,
  page,
  handleButtonHide,
  handleGetError,
  getLargeImg,
}) => {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;
    setIsLoading(true);
    setError(false);
    getSearchImages(searchQuery, page)
      .then(data => {
        if (page === 1) setGallery(data.hits);
        if (page > 1) setGallery(prev => [...prev, ...data.hits]);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [page, searchQuery]);

  useEffect(() => {
    if (error) handleGetError(true);
    if (!error) handleGetError(false);
  }, [handleGetError, error]);

  useEffect(() => {
    if (gallery.length === 12) handleButtonHide(false);
    if (gallery.length < 12) handleButtonHide(true);
  }, [gallery, handleButtonHide]);

  return (
    <>
      <ul className={css.ImageGallery}>
        <ImageGalleryItem gallery={gallery} getLargeImg={getLargeImg} />
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  getLargeImg: PropTypes.func,
  handleGetError: PropTypes.func.isRequired,
  handleButtonHide: PropTypes.func.isRequired,
};
