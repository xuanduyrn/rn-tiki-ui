import React, {useState} from 'react';
import {Input, Item, Icon, Button, Text, Spinner, Radio} from 'native-base';
import styled from 'styled-components';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import AppStyles from '../../config/styles';

const Register = ({navigation}) => {
  const [isHidePassword, setHidePassword] = useState(true);
  const [isDateTimerPicker, setDateTimePicker] = useState(false);
  const [dates, setDates] = useState(new Date().toISOString());
  const [isSubmit, setIsSubmit] = useState(false);
  const [gender, setGender] = useState('male');

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
          <Input placeholder="Họ tên" />
        </Item>
      </FormItem>
      <FormItem>
        <Item floatingLabel>
          <Input placeholder="Số điện thoại" />
        </Item>
      </FormItem>
      <FormItem>
        <Item floatingLabel>
          <Input placeholder="Email" />
        </Item>
      </FormItem>
      <FormItem>
        <Item floatingLabel>
          <Input placeholder="Mật khẩu" secureTextEntry={isHidePassword} />
          <Icon
            name={isHidePassword ? 'eye-off' : 'eye'}
            onPress={() => setHidePassword(!isHidePassword)}
          />
        </Item>
      </FormItem>
      <FormItem>
        <Item floatingLabel>
          <Input
            onTouchStart={() => setDateTimePicker(true)}
            placeholder="Năm sinh"
            value={moment(dates).format('YYYY-MM-DD')}
            pointerEvents="none"
          />
        </Item>
        <DateTimePicker
          isVisible={isDateTimerPicker}
          onConfirm={date => {
            setDates(date);
            setDateTimePicker(false);
          }}
          onCancel={() => setDateTimePicker(false)}
        />
      </FormItem>
      <RadioGroup>
        <GroupItem>
          <Radio
            selectedColor={AppStyles.colors.lightBlueTiki}
            color={AppStyles.colors.BLACK_GRAY}
            selected={gender === 'male'}
            onPress={() => setGender('male')}
          />
          <TextSmall>Nam</TextSmall>
        </GroupItem>
        <GroupItem>
          <Radio
            selectedColor={AppStyles.colors.lightBlueTiki}
            color={AppStyles.colors.BLACK_GRAY}
            selected={gender === 'female'}
            onPress={() => setGender('female')}
          />
          <TextSmall>Nữ</TextSmall>
        </GroupItem>
      </RadioGroup>
      <ButtonLogin full style={{marginTop: 20}} onPress={onSubmit}>
        {isSubmit ? <Spinner color="white" /> : null}
        <Text>Đăng ký</Text>
      </ButtonLogin>
      <TextSmall style={{color: AppStyles.colors.grey, marginBottom: 20}}>
        Khi đăng ký là bạn sẽ chấp nhận{' '}
        <TextSmall
          style={{
            color: AppStyles.colors.lightBlueTiki,
            textDecorationLine: 'underline',
          }}>
          điều khoản sử dụng
        </TextSmall>
      </TextSmall>
    </WrapperContainer>
  );
};

export default Register;

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

const RadioGroup = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const GroupItem = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 10px;
`;

const TextSmall = styled.Text`
  font-size: 13px;
  font-family: ${AppStyles.fonts.FONT_REGULAR};
  margin-top: 3px;
  margin-left: 3px;
  text-align: center;
`;

const ButtonLogin = styled(Button)`
  margin: 3px;
  background-color: ${AppStyles.colors.ERROR};
`;
