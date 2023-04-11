import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {style} from '../themes/MatketPlace';
import React from 'react';

type FlatListProps = {
  data: string[];
  onClick: (item: any) => any;
};

export const FlatLists = (props: FlatListProps) => {
  const {data, onClick} = props;

  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <Pressable onPress={() => onClick(item)}>
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
          </Pressable>
        );
      }}
    />
  );
};
