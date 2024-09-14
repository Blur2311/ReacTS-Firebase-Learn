import {
  // createBrowserRouter,
  Link,
  Route,
  BrowserRouter as Router,
  // RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
// import { ThemedBox } from "./box";
// import { ButtonComponent } from "./button";
// import { Human } from "./human";
// import { StyleComponent } from "./styleProp";
// import { ThemeProvider } from "./theme";
import About from "./components/about";
import Home from "./components/home";
import NotFound from "./components/notfound";
import AuthForm from "./components/authentica";
import MovieApp from "./components/crud";

function App() {
  // const router = createBrowserRouter([
  //   // Tạo một browser router với danh sách các tuyến (routes).
  //   {
  //     path: "/", // Đường dẫn mặc định "/".
  //     element: <Home />, // Khi người dùng truy cập vào "/", thì hiển thị component Home.
  //   },
  //   {
  //     path: "/about", // Đường dẫn "/about".
  //     element: <About />, // Khi truy cập "/about", sẽ hiển thị component About.
  //   },
  //   {
  //     path: "*", // Đường dẫn "*" nghĩa là tất cả các đường dẫn không xác định khác.
  //     element: <NotFound />, // Hiển thị trang NotFound khi không tìm thấy tuyến tương ứng.
  //   },
  // ]);
  return (
    <>
      <AuthForm />
      <MovieApp />
    </>
  );
}

export default App;

// {/* <StyleComponent style={customStyle} text="Hello, world!" />

//       <Human name="Lộc" age={25} gender="female">
//         Say something
//       </Human>

//       <ButtonComponent
//         onButtonClick={(event) => {
//           {
//             /* khai báo kiểu giúp bạn dễ dàng biết được loại sự kiện */
//           }
//           console.log("Button clicked!", event);
//         }}
//       /> */}

// const customStyle: React.CSSProperties = {
//   color: "blue",
//   fontSize: "20px",
//   padding: "10px",
//   border: "1px solid black",
// };
// <ThemeProvider>
//   <ThemedBox />
// </ThemeProvider>;

<Router>
  {/* Sử dụng BrowserRouter để bao quanh toàn bộ ứng dụng */}
  <nav>
    {/* Điều hướng giữa các trang */}
    <Link to="/">Home</Link> |<Link to="/about">About</Link>
  </nav>

  <Routes>
    {/* Định nghĩa các tuyến (routes) */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>;
