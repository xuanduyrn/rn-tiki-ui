import React, {useState} from 'react';
import {Input, Item, Icon, Button, Text, Spinner} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import AppStyles from '../../config/styles';

const Login = ({navigation}) => {
  const [isHidePassword, setHidePassword] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = () => {
    setIsSubmit(true);
    setTimeout(() => {
      navigation.navigate('UserProfile');
      setIsSubmit(false);
    }, 1500);
  };

  return (
    <WrapperContainer>
      <FormItem>
        <Item floatingLabel>
          <Input placeholder="Email/Số điện thoại" />
        </Item>
        {/* <TextSmallValidate>{rulesUserName}</TextSmallValidate> */}
      </FormItem>
      <FormItem>
        <Item floatingLabel>
          <Input placeholder="Mật khẩu" secureTextEntry={isHidePassword} />
          <Icon
            name={isHidePassword ? 'eye-off' : 'eye'}
            onPress={() => setHidePassword(!isHidePassword)}
          />
        </Item>
        {/* <TextSmallValidate>{rulesPassword}</TextSmallValidate> */}
      </FormItem>
      <ButtonLogin full style={{marginTop: 20}} onPress={onSubmit}>
        {isSubmit ? <Spinner color="white" /> : null}
        <Text>Đăng nhập</Text>
      </ButtonLogin>

      <TextSmall style={{color: AppStyles.colors.lightBlueTiki}}>
        Quên mật khẩu
      </TextSmall>
      <TextSmall style={{color: AppStyles.colors.grey}}>
        Hoặc đăng nhập với
      </TextSmall>

      <SocialNetwork>
        <ButtonSocialNetwork
          style={{backgroundColor: '#305DAB'}}
          onPress={() => navigation.navigate('UserProfile')}>
          <Feather name="facebook" size={25} color="white" />
        </ButtonSocialNetwork>
        <ButtonSocialNetwork
          style={{backgroundColor: '#008FF3'}}
          onPress={() => navigation.navigate('UserProfile')}>
          <AntDesign name="twitter" size={25} color="white" />
        </ButtonSocialNetwork>
        <ButtonSocialNetwork
          style={{backgroundColor: '#FF424E'}}
          onPress={() => navigation.navigate('UserProfile')}>
          <AntDesign name="googleplus" size={25} color="white" />
        </ButtonSocialNetwork>
      </SocialNetwork>
    </WrapperContainer>
  );
};

export default Login;

const WrapperContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  background: white;
`;

const FormItem = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
`;

const TextSmall = styled.Text`
  font-size: 13px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  margin-top: 3px;
  margin-left: 3px;
  text-align: center;
  padding: 10px;
`;

const ButtonLogin = styled(Button)`
  margin: 3px;
  background-color: ${AppStyles.colors.ERROR};
`;

const SocialNetwork = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonSocialNetwork = styled(Button)`
  width: 32.3%;
  justify-content: center;
  margin: 1px;
`;
