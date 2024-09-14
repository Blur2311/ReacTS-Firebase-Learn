import { createSlice } from "@reduxjs/toolkit";
// Định nghĩa kiểu cho state của bộ đếm (counter).
interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
  // Khởi tạo state ban đầu với giá trị value là 0.
};
const counterSlice = createSlice({
  name: "counter",
  // Tên của slice.
  initialState,
  // State ban đầu được sử dụng cho slice này.
  reducers: {
    increment: (state) => {
      state.value += 1;
      // Hàm xử lý (reducer) để tăng giá trị của state.
    },
    decrement: (state) => {
      state.value -= 1;
      // Hàm xử lý để giảm giá trị của state.
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      // Hàm xử lý để tăng giá trị của state với số lượng do action.payload cung cấp.
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Export các action để có thể dispatch từ component.
export default counterSlice.reducer;
// Export reducer để sử dụng trong store.
