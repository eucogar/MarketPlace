import {Text, TouchableOpacity, View} from 'react-native';
import {Button, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {MyFavorite, MyProducts} from '../services/APIS';
import {FlatLists} from '../components/FlatList';
import {styles} from '../themes/ListProduct';

interface Props extends StackScreenProps<any, any> {}
export const ListProduct = ({navigation}: Props) => {
  const {
    user: {email},
  } = useContext(AuthContext);

  const [Product, setProduct] = useState([]);
  const [titulo, Settitulo] = useState('Mis productos');
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const data = await MyProducts(email);
    Settitulo('Mis productos');
    setProduct(data);
  };
  const favorite = async () => {
    Settitulo('Mis Favoritos');
    const favorito = await MyFavorite(email);
    setProduct(favorito);
  };
  return (
    <VStack>
      <View style={styles.FONDO}>
        <Text style={styles.titulo}>{titulo}</Text>
        <View style={styles.botones}>
          <TouchableOpacity onPress={getProduct} activeOpacity={0.7}>
            <Text style={styles.text}>Mis Productos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={favorite} activeOpacity={0.7}>
            <Text style={styles.text}>Mis Favoritos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatLists
          data={Product}
          onClick={item => {
            navigation.navigate('EditProduct', {item});
          }}
        />
      </View>
    </VStack>
  );
};
