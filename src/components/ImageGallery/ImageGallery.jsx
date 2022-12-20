import { ImageGalleryItem } from 'components/ImageGalleryItem';

import { StyledImageGallery } from './ImageGallery.styled';

import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem
          onImageClick={onImageClick}
          key={image.id}
          image={image}
        ></ImageGalleryItem>
      ))}
    </StyledImageGallery>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape),
  onImageClick: PropTypes.func.isRequired,
};
