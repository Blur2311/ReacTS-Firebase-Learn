import React, { useRef, useEffect } from "react";

export const ExampleComponent: React.FC = () => {
  // Tạo một ref để lưu trữ phần tử DOM
  const inputRef = useRef<HTMLInputElement>(null);

  // Hàm để focus vào input khi component render
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Sử dụng useEffect để gọi hàm focusInput khi component mount
  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập văn bản ở đây" />
    </div>
  );
};

// let initialValue;

// initialValue: Đây là giá trị khởi tạo của current trong ref object.
// Có thể là bất kỳ giá trị nào, thường là null nếu bạn dự định sử
// dụng ref để tham chiếu một DOM element.
// const myRef = useRef(initialValue);
