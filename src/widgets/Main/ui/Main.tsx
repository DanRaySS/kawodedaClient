import classNames from "classnames";
import { Banner } from "widgets/Banner";
import { Goods } from "widgets/Goods";
import cls from "./Main.module.scss";

interface IMainProps {
  className?: string;
}

export const Main = ({ className }: IMainProps) => {
  return (
    <main className={classNames(cls.Main, {}, [className])}>
      <Banner />
      <Goods />
    </main>
  );
};
