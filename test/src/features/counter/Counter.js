import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button aria-label="Increment value by amount"
                    onClick={() => dispatch(incrementByAmount(10))}>
                    Increment value by amount
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <div>{count}</div>
            </div>
        </div>
    )
}