import {View} from 'react-native';
import {Button, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {MyProducts} from '../services/APIS';
import {FlatLists} from '../components/FlatList';
import {styles} from '../themes/ListProduct';

interface Props extends StackScreenProps<any, any> {}
export const ListProduct = ({navigation}: Props) => {
  const {
    user: {email},
  } = useContext(AuthContext);

  const [Product, setProduct] = useState([]);
  const getProduct = async () => {
    const data = await MyProducts(email);
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, [email]);

  return (
    <VStack>
      <View style={styles.title}>
        <Button title="Mis Productos" color="#537FE7" tintColor="white" />
        <Button title="Mis Favoritos" color="#537FE7" tintColor="white" />
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
