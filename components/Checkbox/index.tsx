import { InputHTMLAttributes, useState } from "react";

import { Label, Input } from "./styles";

type CheckboxProps = {
  id: string;
  children: React.ReactNode | string;
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  id,
  children,
  isChecked = false,
  onCheck,
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    setChecked(!checked);
    onCheck && onCheck(!checked);
  };

  return (
    <Label htmlFor={id} checked={checked}>
      <Input
        type="checkbox"
        name={id}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </Label>
  );
}
