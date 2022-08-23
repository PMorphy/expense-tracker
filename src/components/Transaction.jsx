import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '../context/globalState';

const Transaction = ({ transaction: { id, text, amount } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={amount > 0 ? 'plus' : 'minus'}>
      {text}
      <span>
        {amount > 0 ? '+' : '-'}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className='delete-btn'>
        <i className='fa-solid fa-trash-can'></i>
      </button>
    </li>
  );
};

Transaction.propType = {
  transaction: PropTypes.object.isRequired
};

export default Transaction;
