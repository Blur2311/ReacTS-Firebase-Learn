import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Thêm reducer cho slice 'counter' vào store.
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Định nghĩa kiểu RootState là kiểu của state tổng thể từ store.

export type AppDispatch = typeof store.dispatch;
// Định nghĩa kiểu cho dispatch của store.

export default store;
// Export store để có thể sử dụng trong toàn bộ ứng dụng.
