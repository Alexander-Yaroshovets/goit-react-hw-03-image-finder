import React from 'react';

import { createPortal } from 'react-dom';

import { Overlay } from './Modal.styled.jsx';

import { StyledModal, StyledLargeImg } from './Modal.styled.jsx';

const ModalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handlebBackDropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handlebBackDropClick}>
        <StyledModal>
          <StyledLargeImg src={this.props.bigImage} alt="" />
        </StyledModal>
      </Overlay>,

      ModalRoot
    );
  }
}
