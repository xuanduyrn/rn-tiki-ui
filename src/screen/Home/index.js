import React from 'react';
import styled from 'styled-components';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';

const HomePage = () => {
  return (
    <WrapperContainer>
      <HeaderNavigation title="Home" />
    </WrapperContainer>
  );
};

export default HomePage;

const WrapperContainer = styled.View`
  flex: 1px;
`;
