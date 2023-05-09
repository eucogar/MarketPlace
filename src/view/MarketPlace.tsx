import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import {style} from '../themes/MatketPlace';
import React, {useEffect, useState} from 'react';
import {LaodProducts} from '../services/APIS';
import {VStack} from '@react-native-material/core';
import {FlatLists} from '../components/FlatList';
import {StackScreenProps} from '@react-navigation/stack';
interface Props extends StackScreenProps<any, any> {}

export const MarketPlace = ({navigation}: Props) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <View style={style.container}>
            <Text style={style.title}>MarketPlace</Text>
          </View>
          <VStack>
            <View>
              <FlatLists
                data={Product}
                onClick={item => {
                  navigation.navigate('ViewProduct', {item});
                }}
              />
            </View>
          </VStack>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};
