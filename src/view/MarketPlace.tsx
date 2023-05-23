import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  RefreshControl,
  TextInput,
} from 'react-native';
import {style} from '../themes/MatketPlace';
import {LaodProducts} from '../services/APIS';
import {VStack} from '@react-native-material/core';
import {FlatLists} from '../components/FlatList';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const MarketPlace = ({navigation}: Props) => {
  const [product, setProduct] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredProduct, setFilteredProduct] = useState([]);

  const getProduct = async () => {
    const data = await LaodProducts();
    setProduct(data);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getProduct();
    setRefreshing(false);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);

    const filteredItems = product.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredProduct(filteredItems);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const productList = searchText ? filteredProduct : product;

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
            <TextInput
              style={style.searchBar}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearch}
            />
          </View>
          <VStack>
            <View>
              <FlatLists
                data={productList}
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
