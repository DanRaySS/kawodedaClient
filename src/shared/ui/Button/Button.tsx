import classNames from "classnames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = (props: IButtonProps) => {
  const { 
    className, 
    children,
    ...otherProps
  } = props;
  return (
    <button 
      className={classNames(cls.Button, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
