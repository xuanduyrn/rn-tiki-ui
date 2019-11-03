import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.LIGHT_GRAY};
`;

export const CenterContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.LIGHT_GRAY};
  justify-content: center;
  align-items: center;
`;

export const ScrollView = styled.ScrollView`
  background-color: ${props => props.theme.colors.LIGHT_GRAY};
`;
