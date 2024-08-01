import React from 'react'
import { useReducer } from 'react'
const initialState = { count: 0 }

type CounterState = {
    count: number
}

// discriminant union type : recommended for useReducer
type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1 style={{
                marginTop: '40px',
                color: 'blue',
                fontSize: '40px',
                fontWeight: 'bold'
            }}>Count: {state.count}</h1>
            <button style={{
                marginTop: '40px',
                padding: '10px',
                backgroundColor: 'lightblue',
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                marginRight: '10px'
            }} onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment by 10</button>
            <button style={{
                marginTop: '40px',
                padding: '10px',
                backgroundColor: 'lightblue',
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                marginRight: '10px'
            }} onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement by 10</button>
            <button style={{
                marginTop: '40px',
                padding: '10px',
                backgroundColor: 'lightblue',
                color: 'black',
                border: 'none',
                borderRadius: '5px'
            }} onClick={() => dispatch({ type: 'reset' })}>Reset the count</button>
        </div>
    )
}

export default Counter
