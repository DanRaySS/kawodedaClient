import classNames from "classnames";
import Image from "next/image";
import cls from "./Banner.module.scss";

interface IBannerProps {
  className?: string;
  backgroundColor?: string;
}

export const Banner = ({ className, backgroundColor }: IBannerProps) => {
  return (
    <div className={classNames(cls.Banner, {}, [className])} style={{backgroundColor}}>
      <Image src="/kawodeda.svg" alt="Каводеда" width={800} height={180} className={cls.Banner__img} priority/>
    </div>
  );
};
