import { useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import css from './Styles.module.css'

export const App = () => {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [largeImg, setLargeImg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const handleButtonClick = () => setPage(prevState => prevState + 1);

  const handleFormSubmit = (value) => {setValue(value); setPage(1)}

  const handleShowModalToggle = () => setShowModal(!showModal);

  const handleGetLargeImg = (link) => {
    setLargeImg(link);
    handleShowModalToggle();
}

  const handleGetError = (error) => setError(error)
  const handleButtonHide = (bool) => setIsHidden(bool)
        return (
        <div className={css.App}>
          <Searchbar onSubmit={handleFormSubmit}/>
          <ImageGallery searchQuery={value} page={page} getLargeImg={handleGetLargeImg} handleGetError={handleGetError} handleButtonHide={handleButtonHide}/>
          {error && <h2 className={css.error_message}>Something went wrong..</h2>}
          {!isHidden && <Button onClick={handleButtonClick}/>}
          {showModal && <Modal largeImgLink={largeImg} onKeydown={handleShowModalToggle}/>}
        </div>
      );
  
}
