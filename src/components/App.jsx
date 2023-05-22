import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import css from './Styles.module.css'

export class App extends Component  {
  state = {
    value: '',
    page: 1,
    largeImg: '',
    showModal: false,
    isLoading: false,
    error: false,
    isHidden: true,
  }

  handleButtonClick = () => {
    this.setState(prevState => {
      return {page: prevState.page + 1}
    })};

  handleFormSubmit = (value) => this.setState({value, page: 1})

  handleShowModalToggle = () => this.setState(({showModal}) => ({showModal: !showModal}))
  
  handleGetLargeImg = (link) => {
this.setState({largeImg: link})
this.handleShowModalToggle();
  }

  handleLoading = () => this.setState(({isLoading}) => ({isLoading: !isLoading}))
  handleGetError = (error) => this.setState({error: error})
  handleButtonHide = (bool) => this.setState({isHidden: bool})
  render () {
    const {page, value, largeImg, showModal, isLoading, error, isHidden} = this.state;
    const {handleFormSubmit,handleGetLargeImg,handleLoading,handleButtonClick,handleShowModalToggle,handleGetError, handleButtonHide} = this
    return (
    <div className={css.App}>
      <Searchbar onSubmit={handleFormSubmit}/>
      <ImageGallery searchQuery={value} page={page} getLargeImg={handleGetLargeImg} isLoading={handleLoading} handleGetError={handleGetError} handleButtonHide={handleButtonHide}/>
      {error && <h2 className={css.error_message}>Something went wrong..</h2>}
      {isLoading && <Loader />}
      {!isHidden && <Button onClick={handleButtonClick}/>}
      {showModal && <Modal largeImgLink={largeImg} onKeydown={handleShowModalToggle}/>}
    </div>
  );}
};
