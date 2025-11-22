'use client';

import classNames from "classnames";
import cls from "./ModifiedCheckbox.module.scss";
import { useState } from "react";

interface IModifiedCheckboxProps {
  className?: string;
  children: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const ModifiedCheckbox = ({
  className,
  children,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
}: IModifiedCheckboxProps) => {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const stateChecked = isControlled ? checked : internalChecked;

  const toggle = () => {
    if (disabled) return;

    const newState = !stateChecked;

    if (!isControlled) {
      setInternalChecked(newState);
    }

    onChange?.(newState);
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
