import React, { createContext, useState } from "react";

// Tạo context với kiểu dữ liệu string và hàm setColor
export const ThemeContext = createContext<any>(null);

// Provider component để bao bọc các component con và cung cấp dữ liệu
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [color, setColor] = useState<string>("lightblue"); // Màu nền mặc định

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

// let defaultValue
// createContext là một hàm được sử dụng để tạo một Context object.
// Context object này có hai phần chính: Provider và Consumer.
// Provider cung cấp giá trị cho tất cả các component con
// Consumer giúp các component con truy cập giá trị này.
// const MyContext = createContext(defaultValue);

// useContext là một hook được sử dụng để truy cập giá trị của
// Context trong một component
// const contextValue = useContext(MyContext);
