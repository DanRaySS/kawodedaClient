import classNames from "classnames";
import Image from "next/image";
import { IGood } from "../model/types/good";
import cls from "./Good.module.scss";

interface IGoodProps extends IGood {
  className?: string;
}

export const Good = (props: IGoodProps) => {
  const {
    className,
    title,
    alt = title,
    src,
    price,
    lastPrice,
    // extra,
    createdAt,
    // updatedAt,
  } = props;

  const weekTime = 7 * 24 * 60 * 60 * 1000;
  // const isUpdated = updatedAt && (new Date().getTime() - updatedAt.getTime() < weekTime);
  const isNewBadge = new Date().getTime() - createdAt.getTime() < weekTime;
  const isDiscount = lastPrice && (lastPrice > price);

  return (
    <div className={classNames(cls.Good, {}, [className])}>
      <div className={classNames(cls.Good__img, { [cls.NewBadge]: isNewBadge })}>
        <Image
          src={src}
          alt={alt!}
          fill
          priority
        />
      </div>
      <h2 className={cls.Good__title}>{title}</h2>
      {
        !isDiscount
          ?
          <span className={cls.Good__price}>{`${price.toLocaleString('ru-RU')} р.`}</span>
          :
          <span className={cls.Good__price}>
            <span>{`${price.toLocaleString('ru-RU')} р.`}</span>
            <span className={cls.Good__lastPrice}>{`${lastPrice.toLocaleString('ru-RU')} р.`}</span>
          </span>
      }
    </div>
  );
};
