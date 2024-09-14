interface ButtonComponent {
  // biết rõ `event` là `MouseEvent`
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonComponent: React.FC<ButtonComponent> = ({
  onButtonClick,
}) => {
  return <button onClick={onButtonClick}>Click Me</button>;
};
