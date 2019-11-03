import React from 'react';
import styled from 'styled-components';
import HeaderNavigation from '../../components/Headers/HeaderNavigation';

const Notifications = () => {
  return (
    <WrapperContainer>
      <HeaderNavigation cart={true} headerName="Thông báo" />
    </WrapperContainer>
  );
};

export default Notifications;

const WrapperContainer = styled.View`
  flex: 1px;
`;
