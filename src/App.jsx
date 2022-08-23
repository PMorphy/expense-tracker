import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <div className='container'>
        <div className='left'>
          <Header />
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className='right'>
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
