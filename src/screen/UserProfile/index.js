import React from 'react';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';
import styled from 'styled-components';

const UserProfile = () => {
  return (
    <WrapperContainer>
      <HeaderNavigation title="Cá nhân" />
    </WrapperContainer>
  );
};
export default UserProfile;

const WrapperContainer = styled.View`
  flex: 1px;
`;
