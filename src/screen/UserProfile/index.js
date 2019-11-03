import React from 'react';
import styled from 'styled-components';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';

const UserProfile = () => {
  return (
    <WrapperContainer>
      <HeaderNavigation cart={true} headerName="Cá nhân" />
    </WrapperContainer>
  );
};

export default UserProfile;

const WrapperContainer = styled.View`
  flex: 1px;
`;
