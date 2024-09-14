// import { useState } from "react";

// // Định nghĩa kiểu cho state
// interface CounterState {
//   count: number;
// }

// export const Counter: React.FC = () => {
//   // Khởi tạo state với kiểu định nghĩa
//   // có thể sử dụng các dạng data type khác nhau
//   // const [state, setState] = useState<number>(0);
//   const [state, setState] = useState<CounterState>({ count: 0 });

//   // Hàm để xử lý sự kiện nút bấm
//   const increment = () => {
//     setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// let initialState
// state: Biến chứa giá trị hiện tại của trạng thái.
// setState: Hàm dùng để cập nhật giá trị của trạng thái.
// initialState: Giá trị khởi tạo của trạng thái.
// Có thể là bất kỳ loại dữ liệu nào
// const [state, setState] = useState(initialState);

import React, { useReducer } from "react";

// Định nghĩa kiểu cho state
interface CounterState {
  count: number;
}

// Định nghĩa các hành động có thể xảy ra
type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

// Khởi tạo state và reducer
const initialState: CounterState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const Counter: React.FC = () => {
  // Khởi tạo state và dispatch với useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

//state: Biến chứa trạng thái hiện tại.
//dispatch: Hàm để gửi hành động đến reducer để cập nhật trạng thái.
//reducer: Hàm reducer nhận trạng thái hiện tại và hành động, và trả về trạng thái mới.
//initialState: Giá trị khởi tạo của trạng thái.
// const [state, dispatch] = useReducer(reducer, initialState);
