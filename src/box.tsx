import React, { useContext } from "react";
import { ThemeContext } from "./theme";
// Import trực tiếp context

export const ThemedBox: React.FC = () => {
  const { color } = useContext(ThemeContext); // Sử dụng useContext

  return (
    <div
      style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}
    >
      <h1>Màu nền hiện tại: {color}</h1>
    </div>
  );
};
