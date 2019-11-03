import React from 'react';
import styled from 'styled-components';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';

const Search = () => {
  return (
    <WrapperContainer>
      <HeaderNavigation title="Search" />
    </WrapperContainer>
  );
};

export default Search;

const WrapperContainer = styled.View`
  flex: 1px;
`;
