import {Alert, Image, Text, View} from 'react-native';
import {styles} from '../themes/Login';
import {Button, Spacer, VStack} from '@react-native-material/core';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Perfil = ({navigation}: Props) => {
  const {logOut} = useContext(AuthContext);
  const createTwoButtonAlert = () =>
    Alert.alert('Cerrar Session', 'Quieres Salir de tu cuenta?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: logOut},
    ]);
  return (
    <VStack m={50} spacing={5}>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/Logo.jpg')} />
        <Text style={styles.title}>MARKETPLACE</Text>
      </View>

      <Button title="Editar Perfil" color="#537FE7" tintColor="white" />
      <Spacer />
      <Button
        onPress={() => navigation.navigate('ListProduct')}
        title="Mis Productos"
        color="#537FE7"
        tintColor="white"
      />
      <Spacer />
      <Button
        onPress={createTwoButtonAlert}
        variant="outlined"
        title="Cerrar cesion "
        color="#537FE7"
      />
    </VStack>
  );
};
