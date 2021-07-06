import React from 'react';
import CardList from './components/CardList';
import './App.css';
import { CurrencyContext, CURRENCY } from './context/CurrencyContext';
import ToggleCurrency from './components/ToggleCurrency';

function App() {
  const [currency, setCurrency] = React.useState(CURRENCY.hrv);

  return (
    <CurrencyContext.Provider value={currency}>
      <div className="product">
        <div className="container">
          <ToggleCurrency setCurrency={setCurrency} />
          <CardList/>
        </div>
      </div>
    </CurrencyContext.Provider>
  );
}

export default App;
