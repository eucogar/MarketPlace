import {Text, View} from 'react-native';
import React from 'react';

export default function Container(props: any) {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
}
