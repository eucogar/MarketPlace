import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import {style} from '../themes/MatketPlace';
import React, {useEffect, useState} from 'react';
import {LaodProducts} from '../services/APIS';
import {VStack} from '@react-native-material/core';
import {FlatLists} from '../components/FlatList';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const MarketPlace = ({navigation}: Props) => {
  const [Product, setProduct] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getProduct = async () => {
    const data = await LaodProducts();
    setProduct(data);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getProduct();
    setRefreshing(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
