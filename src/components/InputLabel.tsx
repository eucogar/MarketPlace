import React from 'react';
import {TextInput} from 'react-native';

type InputProps = {
  placeholder: String;
  secureTextEntry: boolean;
  label: string;
  value: any;
  keyboardType: keyboardType;
};

export const InputLabel = (props: InputProps) => {
  const {placeholder, secureTextEntry, keyboardType, value} = props;
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={{
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        textAlign: 'left',
        marginTop: 10,
        color: 'black',
      }}
    />
  );
};
