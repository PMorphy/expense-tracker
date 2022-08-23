import React, {
  Fragment,
  useState,
  useContext,
  useRef,
  useEffect
} from 'react';

import { v4 as uuidv4 } from 'uuid';

import { GlobalContext } from '../context/globalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const textRef = useRef();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = { id: uuidv4(), text, amount: Number(amount) };
    addTransaction(newTransaction);

    setText('');
    setAmount(0);
    textRef.current.focus();
  };

  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Enter text...'
            ref={textRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type='number'
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;
