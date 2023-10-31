import { useState, ChangeEvent } from 'react';
import { FormDataState } from '../../types/common';
import _ from 'lodash';

type OnChange = (event: ChangeEvent<HTMLInputElement>) => void

function useData(initialData: FormDataState): [FormDataState, OnChange] {
  const [data, setData] = (() => {
    let innerData: FormDataState = initialData;

    const setInnerData = (cb: (data: FormDataState) => FormDataState) => {
      innerData = cb(innerData);
    };

    return [innerData, setInnerData];
  })();

  const onChange: OnChange = ({target}) => {
    const isRadioCheckbox = target.type === 'radio' || target.type === 'checkbox';
    const propName = isRadioCheckbox ? 'id' : 'name';
    const name = target[propName];
    const value = isRadioCheckbox ? target.checked : target.value;

    setData((prevState) => {
      if (target.type === 'radio') {
        prevState = _.mapValues(prevState, () => false);
      }

      return { ...prevState, [name]: value };
    });
  };

  return [data, onChange];
}


export default useData;
