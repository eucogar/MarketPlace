import SelectDropdown from 'react-native-select-dropdown';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type SelectProps = {
  placeholder: string;
  value: any;
  defaultValue?: string;
  onChangeText: Function;
  field: string;
  data: Array<any>;
};

export const Select = (props: SelectProps) => {
  const {placeholder, value, onChangeText, field, data, defaultValue} = props;
  return (
    <SelectDropdown
      data={data}
      onSelect={value}
      defaultValue={defaultValue}
      onChangeSearchInputText={value => onChangeText(value, field)}
      defaultButtonText={placeholder}
      buttonTextStyle={{
        textAlign: 'left',
        fontSize: 13,
        color: 'black',
      }}
      renderDropdownIcon={() => (
        <Icon name="caret-down-outline" size={20} color="#000" />
      )}
      buttonStyle={{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        width: '100%',
        marginTop: 10,
      }}
      onSelect={(selectedItem, index) => {
        onChangeText(selectedItem, field);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};
