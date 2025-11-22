import classNames from "classnames";
import Image from "next/image";
import cls from "./Banner.module.scss";

interface IBannerProps {
  className?: string;
  backgroundColor?: string;
  padding?: number;
}

export const Banner = ({ className, backgroundColor, padding }: IBannerProps) => {
  return (
    <div className={classNames(cls.Banner, {}, [className])} style={{backgroundColor, padding}}>
      <Image src="/kawodeda.svg" alt="Каводеда" width={1079} height={211} className={cls.Banner__img} priority/>
    </div>
  );
};
