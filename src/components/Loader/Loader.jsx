import { Audio } from 'react-loader-spinner';

import { StyledSpinner } from './Loader.styled';
export const Loader = () => {
  return (
    <StyledSpinner>
      <Audio
        position="absolute"
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
      ></Audio>
    </StyledSpinner>
  );
};
