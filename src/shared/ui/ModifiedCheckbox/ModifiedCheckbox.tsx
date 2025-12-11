'use client';

import classNames from "classnames";
import cls from "./ModifiedCheckbox.module.scss";
import { useState } from "react";
import { SizesType } from "entities/Good/model/types/good";

interface IModifiedCheckboxProps {
  className?: string;
  children: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  content: SizesType;
  onChange?: (content: SizesType) => void;
}

export const ModifiedCheckbox = (props: IModifiedCheckboxProps) => {
  const {
    className,
    children,
    checked,
    defaultChecked = false,
    disabled = false,
    content,
    onChange,
  } = props;
  
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const stateChecked = isControlled ? checked : internalChecked;

  const toggle = () => {
    if (disabled) return;

    const newState = !stateChecked;

    if (!isControlled) {
      setInternalChecked(newState);
    }

    onChange?.(content);
  };

  return (
    <div
      className={classNames(
        cls.ModifiedCheckboxWrapper,
        {
          [cls.checked]: stateChecked,
          [cls.disabled]: disabled,
        },
        className
      )}
      onClick={toggle}
    >
      <input
        type="checkbox"
        checked={stateChecked}
        readOnly
        disabled={disabled}
        className={cls.hiddenInput}
      />

      <div className={cls.box}>
        {children}
      </div>
    </div>
  );
};
