import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, TextInput, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {style} from '../themes/NewPassword';
interface Props extends StackScreenProps<any, any> {}

export const registerProduct = ({navigation}: Props) => {
  return (
    <>
      <VStack m={50} spacing={7}>
        <View style={style.container}>
          <Text style={style.title}>Publica tu producto</Text>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
        </View>
        <TextInput label="Título" variant="outlined" color={'#537FE7'} />
        <TextInput label="Precio" variant="outlined" color={'#537FE7'} />
        <View style={style.Button}>
          <Button title="Publicar" color="#537FE7" tintColor="white" />
        </View>
      </VStack>
    </>
  );
};
