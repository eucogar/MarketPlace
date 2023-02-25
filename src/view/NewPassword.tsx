import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, TextInput, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {style} from '../themes/NewPassword';
interface Props extends StackScreenProps<any, any> {}

export const NewPassword = ({navigation}: Props) => {
  return (
    <>
      <VStack m={50} spacing={7}>
        <View style={style.container}>
          <Text style={style.title}>
            No te preocupes, te ayudaremos a reestablacer tu contraaseña
          </Text>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
          <Text style={style.Text}>Ingresa tu Email o numero de telefeono y te enviaremos la nueva contraseña.</Text>
        </View>
        <TextInput label={'Email o Password'} color={'#537FE7'} />
        <View style={style.Button}>
          <Button
            onPress={() => navigation.navigate('Login')}
            variant="outlined"
            title="Atras"
            color="#537FE7"
          />
          <Button title="Enviar" color="#537FE7" tintColor="white" />
        </View>
      </VStack>
    </>
  );
};


