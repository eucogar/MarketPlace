import {FlatList, Image, Text, View} from 'react-native';
import {style} from '../themes/MatketPlace';
import {Button} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

type FlatListProps = {
  data: string[];
};

export const FlatLists = (props: FlatListProps) => {
  const {data} = props;

  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      renderItem={({item}) => {
        return (
          <View style={style.SuperContainer}>
            <View style={style.itemContainer}>
              <Image
                source={{uri: item.image1}}
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={style.Description}>
              <Text style={style.Name}>{item.title}</Text>
              <Text style={style.price}>$ {item.price}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};
