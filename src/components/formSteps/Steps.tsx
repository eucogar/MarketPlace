import {View} from 'react-native';
import React from 'react';
import {InputLabel} from '../InputLabel';
import {Select} from '../Select';

interface StepsProps {
  key1: string;
  text1: string;
  value1: any;
  key2: string;
  text2: string;
  value2: any;
  onChange: Function;
  select?: boolean;
  data?: Array<any>;
}

export default function Steps(props: StepsProps) {
  const {value1, value2, text2, text1, onChange, key2, key1, select, data} =
    props;

  return (
    <View>
      <InputLabel
        placeholder={text1}
        value={value1}
        onChangeText={onChange}
        field={key1}
      />
      {select ? (
        <Select
          placeholder={text2}
          value={value2}
          onChangeText={onChange}
          field={key2}
          // @ts-ignore
          data={data}
        />
      ) : (
        <InputLabel
          placeholder={text2}
          value={value2}
          onChangeText={onChange}
          field={key2}
        />
      )}
    </View>
  );
}
