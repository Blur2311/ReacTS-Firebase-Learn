// Component con
// Props là các giá trị được truyền từ component cha sang component con.
// Bạn có thể sử dụng interface hoặc type để định nghĩa kiểu dữ liệu cho props.
// interface phù hợp hơn cho việc định nghĩa các cấu trúc dữ liệu phức tạp
// trong khi type thường được dùng cho các kiểu dữ liệu đơn giản
// và các kiểu kết hợp phức tạp.

// React.FC<>: React.FC là một type dành cho functional component,
// kết hợp với GreetProps Là type định nghĩa kiểu
// của các props (ở đây là name)

type GreetProps = {
  name: string;
};

export const Greet: React.FC<GreetProps> = ({ name }) => {
  return <div>Hi, {name}!</div>;
};
