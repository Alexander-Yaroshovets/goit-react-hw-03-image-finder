import React from 'react';

import PropTypes from 'prop-types';

import {
  StyledHeader,
  StyledSearchForm,
  StyledSerchButton,
  StyledSearchLabel,
  StyledSearchInput,
} from './SerchBar.styled';

import { HiSearch } from 'react-icons/hi';

export class SearchBar extends React.Component {
  render() {
    const { submit } = this.props;
    return (
      <StyledHeader>
        <StyledSearchForm onSubmit={submit}>
          <StyledSerchButton type="submit">
            <StyledSearchLabel>
              <HiSearch fill="blue" size="24" />
            </StyledSearchLabel>
          </StyledSerchButton>

          <StyledSearchInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledSearchForm>
      </StyledHeader>
    );
  }
}

SearchBar.propTypes = {
  submit: PropTypes.func.isRequired,
};
