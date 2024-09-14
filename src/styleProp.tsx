interface StyleComponent {
  // Sử dụng kiểu CSSProperties của React để định nghĩa kiểu cho props style
  style?: React.CSSProperties;
  text: string; // Một prop khác là text
}

// Tạo một component với props kiểu
export const StyleComponent: React.FC<StyleComponent> = ({ style, text }) => {
  return <div style={style}>{text}</div>;
};
