import React from 'react';
import styled from 'styled-components';
import AppStyles from '../../config/styles';

const chipStyles = {
  backgroundColor: AppStyles.colors.black,
};

const textStyles = {
  color: AppStyles.colors.white,
};

const ChipProduct = ({name, isActive, onPress}) => {
  return (
    <Chip style={isActive ? chipStyles : null} onPress={onPress}>
      <TextSmall style={isActive ? textStyles : null}>{name}</TextSmall>
    </Chip>
  );
};

export default ChipProduct;

const Chip = styled.TouchableOpacity`
  height: 30px;
  width: auto;
  border-width: 1px;
  border-color: #cfcfcf;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 5px;
`;

const TextSmall = styled.Text`
  font-size: 13px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
`;
