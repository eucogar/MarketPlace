import {KeyboardTypeOptions} from 'react-native/Libraries/Components/TextInput/TextInput';
import {TextInput} from 'react-native';
import React from 'react';

type InputProps = {
  placeholder?: string;
  secureTextEntry?: boolean;
  defaultValue: any;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: Function;
  field: string;
};

export const InputText = (props: InputProps) => {
  const {
    placeholder,
    secureTextEntry,
    keyboardType,
    defaultValue,
    onChangeText,
    field,
    value,
  } = props;
  return (
    <TextInput
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={value => onChangeText(value, field)}
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
