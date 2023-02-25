import {TextInput} from '@react-native-material/core';
import {View} from 'react-native';
import React from 'react';

interface StepsProps {
  key1: string;
  text1: string;
  value1: any;
  key2: string;
  text2: string;
  value2: any;
  onChange: Function;
}

export default function Steps(props: StepsProps) {
  const {value1, value2, text2, text1, onChange, key2, key1} = props;

  return (
    <View>
      <TextInput
        label={text1}
        value={value1}
        color={'#537FE7'}
        onChangeText={value => onChange(value, key1)}
      />
      <TextInput
        label={text2}
        value={value2}
        color={'#537FE7'}
        onChangeText={value => onChange(value, key2)}
      />
    </View>
  );
}
