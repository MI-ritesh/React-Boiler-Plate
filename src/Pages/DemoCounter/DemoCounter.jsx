import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Redux/Features/ExampleSlice';

const DemoCounter = () => {
  const count = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default DemoCounter;