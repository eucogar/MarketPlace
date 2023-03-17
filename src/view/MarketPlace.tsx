import {FlatList, KeyboardAvoidingView, Text, View} from 'react-native';
import {style} from '../themes/MatketPlace';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {LaodProducts} from '../services/APIS';
import {VStack} from '@react-native-material/core';

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
        <VStack m={50} spacing={7}>
          <View>
            <FlatList
              data={Product}
              renderItem={({item}) => {
                console.log(item);
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text>{item.title}</Text>
                    <Text>{item.price}</Text>
                  </View>
                );
              }}
            />
          </View>
        </VStack>
      </KeyboardAvoidingView>
    </>
  );
};
