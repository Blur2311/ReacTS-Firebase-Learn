import React, { useState } from "react";

// Định nghĩa kiểu cho đối tượng người dùng
interface User {
  id: number;
  name: string;
}

// Định nghĩa kiểu cho state
type UserState = User | null;

export const UserProfile: React.FC = () => {
  // Khởi tạo state với giá trị ban đầu là null
  const [user, setUser] = useState<UserState>(null);

  // Hàm để đặt giá trị của user
  const loginUser = () => {
    setUser({ id: 1, name: "John Doe" });
  };

  // Hàm để đặt giá trị của user thành null
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div>
          <p>No user logged in</p>
          <button onClick={loginUser}>Login as John Doe</button>
        </div>
      )}
    </div>
  );
};
