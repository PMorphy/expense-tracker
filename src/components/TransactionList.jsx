import React, { Fragment, useContext } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { GlobalContext } from '../context/globalState';

import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [parent] = useAutoAnimate();
  return (
    <Fragment>
      <h3>History</h3>
      <ul className='list' ref={parent}>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TransactionList;
