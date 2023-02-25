import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Spacer, TextInput, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/Login';

interface Props extends StackScreenProps<any, any> {}

export const Login = ({navigation}: Props) => {
  return (
    <>
      <VStack m={50} spacing={7}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/Logo.jpg')} />
          <Text style={styles.title}>MARKETPLACE</Text>
        </View>
        <TextInput label={'Email'} color={'#537FE7'} />
        <Spacer />
        <TextInput label={'Password'} color={'#537FE7'} />
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
