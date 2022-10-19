import React from 'react';
import { DataItem, ChangeFunction } from '../../../types';

interface Props {
  item: DataItem,
  index: number,
  changeChecked: ChangeFunction,
};

const CurrencyItem: React.FC<Props> = ({ item, index, changeChecked })=> {
  return (
    <div
      key={index}
      onClick={(e) => changeChecked(e, index)}
      className={`option border hover ${item.checked ? 'white' : 'grey'}`}
    >
      <input type="checkbox" id={item.name} checked={item.checked} readOnly/>
      <label htmlFor={item.name}>{item.name}</label>
    </div>
  );
};

export default CurrencyItem;
