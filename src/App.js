import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import imgApi from './Components/Services/imgApi';
import Modal from './Components/Modal/Modal';


export default class App extends Component {
  state = {
    pictures: [],
    error: null,
    loading: false,
    searchQuery: '',
    page: 1,
    imgSrc: null
  }
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchPictures()
    }
  }

  fetchPictures = () => {
    const { searchQuery, page } = this.state;
    imgApi
      .fetchImgWithQuery(searchQuery, page)
      .then(pictures => this.setState(prevState => ({pictures: [...prevState.pictures, ...pictures], page: prevState.page+1})))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({loading: false}));
  }

  handleSearchFormInput = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      pictures: []
    })
  }
  openModal = (e) => {
    this.setState({
      imgSrc: e.target.alt
    })
  }
  closeModal = (e) => {
    console.log(e.target)
    if (e.target.src !== this.state.imgSrc) {
      this.setState({
      imgSrc: null
    })
    }
  }
  closeModalByEsc = () => {
    this.setState({
      imgSrc: null
    })
  }
  
  
  
  render() {
    const {  error} = this.state;
    return (
      <div>
        {error && <div>Something went wrong:(</div>}
        {/* {this.state.pictures.map(picture => <img src={picture.largeImageURL}></img>)} */}
        <SearchBar fetchPictures={this.handleSearchFormInput}></SearchBar>
        {this.state.pictures.length > 0 && <ImageGallery pictures={this.state.pictures} openModal={this.openModal}></ImageGallery>}
        {this.state.pictures.length > 0 && <Button onClick={this.fetchPictures}></Button>}
        {this.state.imgSrc && <Modal imgSrc={this.state.imgSrc} closeModal={this.closeModal} closeModalByEsc={this.closeModalByEsc}></Modal> }
      </div>
    )
  }
}
