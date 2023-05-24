import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSearchImages } from 'api/SearchImageApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../Styles.module.css';

export const ImageGallery = ({
  searchQuery,
  page,
  isLoading,
  handleButtonHide,
  handleGetError,
  getLargeImg,
}) => {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;
    try {
      getSearchImages(searchQuery, page).then(data => {
        if (page === 1) setGallery(data.hits);
        if (page > 1) setGallery(prev => [...prev, ...data.hits]);
      });
    } catch (error) {
      setError(true);
    } finally {
      console.log(page);
    }
  }, [page, searchQuery]);

  useEffect(() => {
    if (error) handleGetError(true);
  }, [handleGetError, error]);
  useEffect(() => {
    if (gallery.length === 12) handleButtonHide(false);
    if (gallery.length < 12) handleButtonHide(true);
  }, [gallery, handleButtonHide]);

  console.log(gallery);
  return (
    <>
      <ul className={css.ImageGallery}>
        <ImageGalleryItem gallery={gallery} getLargeImg={getLargeImg} />
      </ul>
    </>
  );
};
// export class ImageGallery extends Component {
//   state = {
//     gallery: [],
//     error: '',
//   };

// async componentDidUpdate(prevProps) {
//   const { searchQuery, page, isLoading, handleButtonHide, handleGetError } =
//     this.props;

//   try {
//     if (prevProps.searchQuery !== searchQuery) {
//       this.setState({ gallery: [] });
//       handleGetError(false);
//       isLoading();
//       const gallery = await getSearchImages(searchQuery, page);
//       this.setState({ gallery: gallery.hits });
//       handleButtonHide(false);
//       if (gallery.hits.length < 12) {
//         handleButtonHide(true);
//         handleGetError(false);
//       }
//       if (gallery.hits.length >= 12) handleButtonHide(false);
//       isLoading();
//       if (gallery.hits.length === 0) {
//         handleGetError(true);
//         handleButtonHide(true);
//         return;
//       }
//     }
//     if (prevProps.page < page) {
//       isLoading();
//       const gallery = await getSearchImages(searchQuery, page);
//       this.setState(prevState => {
//         return { gallery: [...prevState.gallery, ...gallery?.hits] };
//       });

//       isLoading();
//       return;
//     }
//   } catch (error) {
//     isLoading();
//     if (error) return handleGetError();
//   }
// }

//   render() {
//     const { gallery } = this.state;
//     const { getLargeImg } = this.props;
//     return (
//       <>
//         <ul className={css.ImageGallery}>
//           <ImageGalleryItem gallery={gallery} getLargeImg={getLargeImg} />
//         </ul>
//       </>
//     );
//   }
// }

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  getLargeImg: PropTypes.func,
  isLoading: PropTypes.func.isRequired,
  handleGetError: PropTypes.func.isRequired,
  handleButtonHide: PropTypes.func.isRequired,
};
