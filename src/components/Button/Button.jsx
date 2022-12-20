import { ButtonStyled } from './StyledButton.styled';

import PropTypes from 'prop-types';

export const Button = ({ click }) => {
  return (
    <ButtonStyled onClick={click} type="button">
      load more
    </ButtonStyled>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
};
