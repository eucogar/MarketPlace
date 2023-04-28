import {useState} from 'react';

export const useForm = <T extends Record<string, any>>(initState: T) => {
  const [state, setState] = useState<T>(initState);

  const onChange = (value: any, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const clearFields = () => {
    const clearedState = Object.keys(state).reduce((acc, curr) => {
      acc[curr] = '';
      return acc;
    }, {} as T);
    setState(clearedState);
  };

  return {
    ...state,
    form: state,
    onChange,
    clearFields,
  };
};
