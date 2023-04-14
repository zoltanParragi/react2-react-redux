import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
decrement

export default function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)

    return (
        <div>
            <h2>Counter {count}</h2>
            <div>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(incrementByAmount(4))}>+4</button>
            </div>
        </div>
    )
}
