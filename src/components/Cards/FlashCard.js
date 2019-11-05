import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import AppStyles from '../../config/styles';

const FlashCard = ({price, flashName, progress, imageProduct}) => {
  return (
    <WrapperCard>
      <Image source={imageProduct} style={{width: 120, height: 90}} />
      <TextSmall>{price}</TextSmall>
      <Progress>
        <TextProgress>{flashName}</TextProgress>
      </Progress>
    </WrapperCard>
  );
};

export default FlashCard;

const WrapperCard = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const TextSmall = styled.Text`
  font-size: 14px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  color: ${AppStyles.colors.black};
  margin: 5px;
`;

const TextProgress = styled.Text`
  font-size: 10px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  font-weight: bold;
  color: ${AppStyles.colors.white};
  margin-left: 10px;
`;

const Progress = styled.View`
  height: 20px;
  background-color: #fca8ad;
  width: 100%;
  justify-content: center;
  border-radius: 10px;
`;
