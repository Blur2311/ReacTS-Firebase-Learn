interface HumanProps {
  name: string;
  age: number;
  gender: "male" | "female";
  children: string;
}

export const Human: React.FC<HumanProps> = ({
  name,
  age = 0,
  gender,
  children,
}) => {
  return (
    <div>
      <p>Tên: {name}</p>
      <p>Tuổi: {age}</p>
      <p>Giới tính: {gender}</p>
      <p>{children}</p>
    </div>
  );
};
