import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Spacer, TextInput, VStack} from '@react-native-material/core';

export default function Login() {
  return (
    <>
      <VStack m={50} spacing={7}>
        <Text style={style.title}>Bienvenido a tu MarketPlace!</Text>
        <View style={style.container}>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
        </View>
        <TextInput label={'Email'} />
        <Spacer />
        <TextInput label={'Password'} />
        <Button
          variant="text"
          title="OH! has olvidado tu contraseña?"
          disabled
        />
        <View style={style.Button}>
          <Button title="Inicar sesion" />
          <Button variant="outlined" title="Registar empresa" />
        </View>
      </VStack>
    </>
  );
}

const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#6200ee',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 20,
  },
  Button: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text: {
    margin: 10,
    color: 'black',
    left: 80,
    fontWeight: 'bold',
  },
  img: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
