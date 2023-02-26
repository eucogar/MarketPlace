import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Spacer, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {style} from '../themes/Product';
import {Select} from '../components/Select';
import {InputLabel} from '../components/InputLabel';
interface Props extends StackScreenProps<any, any> {}

export const registerProduct = ({navigation}: Props) => {
  return (
    <>
      <View style={style.row}>
        <Button
          style={style.Button}
          variant="text"
          title="Cancelar"
          color="#537FE7"
        />
        <View style={style.container}>
          <Text style={style.title}>Publica tu producto</Text>
        </View>
        <Button
          style={style.Button}
          variant="text"
          title="Publicar"
          color="#537FE7"
        />
      </View>
      <VStack m={50} spacing={7}>
        <View style={style.container}>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
        </View>
        <InputLabel placeholder={'Titulo'} />
        <Text>Puedes incluir detalles como la marca, el tamaño o el color</Text>
        <InputLabel placeholder={'Precio'} keyboardType={'numeric'} />
        <Select />
        <InputLabel placeholder={'Descripcion'} />
        <Spacer />
        <Spacer />
        <Text>Opcional</Text>
      </VStack>
    </>
  );
};
