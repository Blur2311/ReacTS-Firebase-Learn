import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  // Sử dụng useSelector để truy cập giá trị 'counter' từ store.

  const dispatch = useDispatch();
  // Sử dụng useDispatch để gửi action đến store.

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
