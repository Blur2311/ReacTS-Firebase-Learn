// src/components/AuthForm.tsx
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Tạo người dùng mới với email và mật khẩu
  const handleSignUp = async () => {
    try {
      // Hàm Firebase Auth để tạo người dùng mới
      const userCredential = await createUserWithEmailAndPassword(
        auth, // Đối tượng Firebase Auth
        email, // Email của người dùng
        password // Mật khẩu của người dùng
      );
      // Lấy đối tượng người dùng từ thông tin đăng ký
      const user = userCredential.user;
      console.log("Người dùng đã được tạo:", user);
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
    }
  };

  // Đăng nhập người dùng hiện có với email và mật khẩu
  const handleSignIn = async () => {
    try {
      // Hàm Firebase Auth để đăng nhập người dùng
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Người dùng đã đăng nhập:", user);
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
    }
  };

  // Đăng xuất người dùng hiện tại
  const handleLogout = async () => {
    try {
      await signOut(auth); // Hàm đăng xuất của Firebase Auth
      console.log("Người dùng đã đăng xuất");
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
    }
  };

  return (
    <div>
      <h2>Firebase Auth</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mật khẩu"
      />
      <button onClick={handleSignUp}>Đăng ký</button>
      <button onClick={handleSignIn}>Đăng nhập</button>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
};

export default AuthForm;
