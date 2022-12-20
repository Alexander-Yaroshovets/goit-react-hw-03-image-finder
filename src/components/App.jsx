import React from 'react';

import { Button } from './Button';

import { SearchBar } from './Searchbar';

import { ImageGallery } from './ImageGallery';

import { Loader } from './Loader';

import { Modal } from './Modal';

import { getImages } from 'services/api';

export class App extends React.Component {
  state = {
    showModal: false,
    page: 1,
    query: '',
    items: [],
    bigImage: null,
    isLoading: false,
    error: false,
  };

  async componentDidUpdate(a, prevState) {
    const { query, page } = this.state;

    try {
      if (query === '') {
        alert('type something');
        return;
      }

      if (prevState.page !== page || prevState.query !== query) {
        this.setState(prevState => ({ isLoading: !prevState.isLoading }));

        const getAllImages = await getImages(query, page);
        const imagesArray = getAllImages.hits;

        this.setState(prevState => ({
          items: [...prevState.items, ...imagesArray],
          isLoading: false,
        }));

        if (imagesArray.length === 0) {
          alert('Wrong query');
          return;
        }
      }
    } catch (error) {
      this.setState({ error: true });
      // console.log(error);
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({
      query: event.target.elements.query.value,
      page: 1,
      items: [],
      showModal: false,
    });

    event.target.reset();
  };

  loadMore = () => {
    try {
      this.setState(prevState => ({
        page: prevState.page + 1,
        isLoading: true,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  toggleModal = image => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));

    this.setState({ bigImage: image });
  };

  render() {
    const { showModal, items, bigImage, isLoading } = this.state;

    return (
      <>
        <SearchBar submit={this.handleSubmit}></SearchBar>

        <ImageGallery
          onImageClick={this.toggleModal}
          images={items}
        ></ImageGallery>

        {items.length >= 12 && <Button click={this.loadMore}></Button>}

        {isLoading && <Loader></Loader>}

        {showModal && (
          <Modal bigImage={bigImage} onClose={this.toggleModal}></Modal>
        )}
      </>
    );
  }
}
