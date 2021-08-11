import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from './store/hook';
import { decrement, increment, incrementByAmount } from './store/counterSlice'
import { selectCount } from './store/counterSlice';


export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button

        onClick={() => dispatch(incrementByAmount(5))}
      >
        print
      </button>
    </div>
  )
}