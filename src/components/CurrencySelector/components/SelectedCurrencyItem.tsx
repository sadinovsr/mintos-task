import React from 'react';
import { DataItem, ChangeByNameFunction } from '../../../types';

type Props = {
  item: DataItem
  changeCheckedByName: ChangeByNameFunction
};

const SelectedCurrencyItem: React.FC<Props> = ({ item, changeCheckedByName }) => {
  return (
    <div key={item.name} className="option-top rounded grey no-hover">
      <span
        className="rounded-button"
        onClick={() => changeCheckedByName(item.name)}
      >
        x
      </span>
      <span className="top-text">
        {item.name}
      </span>
    </div>
  );
};

export default SelectedCurrencyItem;
