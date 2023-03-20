import {KeyboardAvoidingView, Text, View} from 'react-native';
import {style} from '../themes/MatketPlace';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {LaodProducts} from '../services/APIS';
import {VStack} from '@react-native-material/core';
import {FlatLists} from '../components/FlatList';

export const MarketPlace = () => {
  const [Product, setProduct] = useState([]);

  const getProduct = async () => {
    const data = await LaodProducts();
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={style.container}>
          <Text style={style.title}>Comprar</Text>
          <Text style={style.title2}>
            Categoria <Icon name="caret-down-outline" size={20} color="white" />
          </Text>
        </View>
        <VStack>
          <View>
            <FlatLists data={Product} />
          </View>
        </VStack>
      </KeyboardAvoidingView>
    </>
  );
};
