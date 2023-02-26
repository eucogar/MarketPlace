import SelectDropdown from 'react-native-select-dropdown';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const Select = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <SelectDropdown
      data={countries}
      defaultButtonText={'Cotegorias'}
      buttonTextStyle={{
        left: 90,
      }}
      renderDropdownIcon={() => (
        <Icon name="caret-down-outline" size={20} color="#000" />
      )}
      buttonStyle={{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor: 'white',
        width: 310,
      }}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
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
