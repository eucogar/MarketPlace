import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {

  const [state, setState] = useState<T>( initState );

  const onChange = ( value: any , field: keyof T ) => {
    setState({
      ...state,
      [field]: value
    });
  }

  return {
    ...state,
    form: state,
    onChange,
  }

}
