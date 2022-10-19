import React, { useState } from 'react';
import CurrencySelector from './components/CurrencySelector/CurrencySelector';
import { DataItem } from './types';
import './App.css';

const App = () => {
  const [data, changeData] = useState([
    { name: 'EUR', checked: false },
    { name: 'PLN', checked: false },
    { name: 'GEL', checked: false },
    { name: 'DKK', checked: false },
    { name: 'CZK', checked: false },
    { name: 'GBP', checked: false },
    { name: 'SEK', checked: false },
    { name: 'USD', checked: false },
    { name: 'RUB', checked: false },
  ]);

  const changeChecked = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    let newData = [...data]
    newData[index].checked = !newData[index].checked;
    changeData(newData);
  };

  const changeCheckedByName = (name: string) => {
    let newData = [...data]
    const index = newData.findIndex((item: DataItem) => item.name === name)
    newData[index].checked = !newData[index].checked;
    changeData(newData);
  };

  return (
    <div className="App">
      <CurrencySelector
        data={data}
        changeChecked={changeChecked}
        changeCheckedByName={changeCheckedByName}
      />
    </div>
  );
};

export default App;
