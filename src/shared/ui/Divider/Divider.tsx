import classNames from "classnames";
import cls from "./Divider.module.scss";

interface IDividerProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Divider = ({ className, width, height }: IDividerProps) => {
  return (
    <div className={classNames(cls.Divider, {}, [className])} style={{width, height}}>
      
    </div>
  );
};
