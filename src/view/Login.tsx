import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Spacer, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/Login';
import {InputLabel} from '../components/InputLabel';
import {useForm} from '../hooks/useForm';
import {UserLogin} from '../models/UserLogin';
import {useEffect} from 'react';

interface Props extends StackScreenProps<any, any> {}

export const Login = ({navigation}: Props) => {
  const {form, onChange} = useForm<UserLogin>({} as UserLogin);
  const {email, password} = form;

  useEffect(() => {}, [form]);
  console.log(form);
  return (
    <>
      <VStack m={50} spacing={7}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/Logo.jpg')} />
          <Text style={styles.title}>MARKETPLACE</Text>
        </View>
        <InputLabel
          placeholder={'Email'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={onChange}
          field={'email'}
        />
        <Spacer />
        <InputLabel
          placeholder={'Password'}
          keyboardType={'visible-password'}
          value={password}
          onChangeText={onChange}
          field={'password'}
        />
        <View style={styles.Text}>
          <Button
            variant="text"
            title="OH! has olvidado tu contraseña?"
            color={'gray'}
            onPress={() => navigation.navigate('NewPassword')}
          />
        </View>
        <View style={styles.Button}>
          <Button title="Inicar sesion" color="#537FE7" tintColor="white" />
          <Button
            onPress={() => navigation.navigate('Register')}
            variant="outlined"
            title="Registar "
            color="#537FE7"
          />
        </View>
      </VStack>
    </>
  );
};
