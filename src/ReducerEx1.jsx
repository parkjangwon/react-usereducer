import { useState, useReducer } from 'react'

// reducer state를 업데이트하는 역할 (은행)
// dispatch state를 업데이트 하는 요구
// action state를 어떻게 업데이트 할지 명시 (요청 상세 사항)
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload
    case ACTION_TYPES.withdraw:
      return state - action.payload
    default:
      return state
  }
}

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
}

function ReducerEx1() {
  const [number, setNumber] = useState(0)
  const [money, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <h2>useReducer 은행에 온 것을 환영합니다</h2>
      <p>잔고: {money}원</p>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
        step='1000'
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number })
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number })
        }}
      >
        출금
      </button>
    </>
  )
}

export default ReducerEx1
