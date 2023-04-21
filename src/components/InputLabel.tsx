import React from 'react';
import {TextInput} from 'react-native';
import {KeyboardTypeOptions} from 'react-native/Libraries/Components/TextInput/TextInput';

type InputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  value: any;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: Function;
  field: string;
  defaultValue?: any;
};

export const InputLabel = (props: InputProps) => {
  const {
    placeholder,
    secureTextEntry,
    keyboardType,
    value,
    onChangeText,
    field,
    defaultValue,
  } = props;
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      defaultValue={defaultValue}
      onChangeText={value => onChangeText(value, field)}
      style={{
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 10,
        color: 'black',
      }}
    />
  );
};
