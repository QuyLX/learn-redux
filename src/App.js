import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// useSelector để truy xuất dữ liệu từ store
// useDispatch để truy xuất tới actions
import { increment, isLogged } from './actions'
function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const dispatch = useDispatch();
  return (
    <div >
      <h1>Counter: {counter}</h1>
      {/* Không được gọi trực tiếp phương thức làm thay đổi state trong store */}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(isLogged())}>Is Show?</button>
      {islogged ? <h3>Valueable Information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
