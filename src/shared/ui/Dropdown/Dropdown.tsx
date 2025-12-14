'use client';

import classNames from "classnames";
import cls from "./Dropdown.module.scss";
import { useState } from "react";

interface IDropdownProps {
  className?: string;
  headerHeight?: number;
  title: string;
  children: React.ReactNode;
}

export const Dropdown = ({ className, title, children, headerHeight }: IDropdownProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  const mods = {
    flex: isVisible,
  }

  return (
    <div className={classNames(cls.Dropdown, {}, [className])}>
      <header
        className={cls.Dropdown__header}
        onClick={() => setIsVisible(!isVisible)}
        style={{ height: headerHeight }}
      >
        <h2 className={cls.Dropdown__title}>
          {title}
        </h2>
        <div className={cls.Dropdown__sign}>{isVisible ? "˄" : "˅"}</div>
      </header>
      <div
        className={classNames(cls.Dropdown__content, mods)}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
