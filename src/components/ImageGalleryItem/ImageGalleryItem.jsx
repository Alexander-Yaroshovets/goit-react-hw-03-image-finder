import { StyledImage, StyledItem } from './ImageGalleryItem.styled';

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <StyledItem>
      <StyledImage
        onClick={() => onImageClick(image.largeImageURL)}
        width="50"
        height="50"
        src={image.webformatURL}
        alt={image.id}
      />
    </StyledItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
