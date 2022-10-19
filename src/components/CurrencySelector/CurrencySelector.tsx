import React from 'react';
import CurrencyItem from './components/CurrencyItem';
import SelectedCurrencyItem from './components/SelectedCurrencyItem';
import { DataItem, ChangeFunction, ChangeByNameFunction } from '../../types';
import './CurrencySelector.css';

type Props = {
  data: DataItem[]
  changeChecked: ChangeFunction
  changeCheckedByName: ChangeByNameFunction
};

const CurrencySelector: React.FC<Props> = ({ data, changeChecked, changeCheckedByName }) => {
  const topData = data.filter((item: DataItem) => item.checked);
  return (
    <div className="container border">
      <div className="top-container">
        {topData.map((item: DataItem, index: number) => (
          <SelectedCurrencyItem
            key={index}
            item={item}
            changeCheckedByName={changeCheckedByName}
          />
        ))}
      </div>
      <div className="bottom-container">
        {data.map((item: DataItem, index: number) => (
          <CurrencyItem
            key={index}
            item={item}
            index={index}
            changeChecked={changeChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
