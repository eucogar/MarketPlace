import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Spacer, TextInput, VStack} from '@react-native-material/core';

export default function Login() {
  return (
    <>
      <VStack m={50} spacing={7}>
        <Text style={style.title}>GENIAL TENERTE DE VUELTA!!!</Text>
        <View style={style.container}>
          <Image style={style.img} source={require('../img/Logo.jpg')} />
        </View>
        <TextInput label={'Email'} />
        <Spacer />
        <TextInput label={'Password'} />
        <Text style={style.Text}>OH! has olvidado tu contraseña?</Text>
        <View style={style.Button}>
          <Button title="Login" />
        </View>
      </VStack>
    </>
  );
}

const style = StyleSheet.create({
  title: {
    color: '#6200ee',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 20,
  },
  Button: {
    margin: 40,
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
