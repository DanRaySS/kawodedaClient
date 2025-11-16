"use client";

import classNames from "classnames";
import Image from "next/image";
import cls from "./Header.module.scss";
import { useWindowWidth } from "shared/hooks/useWindowWidth";

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  const width = useWindowWidth();

  const getValueOfBoughtItems = 1000;

  const valueOfBoughtItems = getValueOfBoughtItems >= 1000 ? "10>" : getValueOfBoughtItems;

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <a href="." rel="noopener" className={cls.Logo}>
        {/* Kawodeda */}
        <Image src={"/title.png"} alt={"Лого"} width={width > 700 ? 220 : width > 500 ? 160 : 120} height={width > 700 ? 70 : width > 500 ? 50 : 40} />
      </a>
      <ul role="list" className={classNames(cls.Header__list, cls.List, cls.SocialList)}>
        <li className={cls.List__item}>
          <a href="https://www.youtube.com/@KawoDeda" target="_blank" rel="noopener" className={classNames(cls.Link, cls.Youtube)}>{width > 1000 ? "Youtube" : <Image src={"/yt.svg"} alt="Youtube" width={width > 700 ? 40 : width > 500 ? 30 : 24} height={width > 700 ? 40 : width > 500 ? 30 : 24} />} </a>
        </li>
        <li className={cls.List__item}>
          <a href="https://t.me/bIbok_kawodeda" target="_blank" rel="noopener" className={classNames(cls.Link, cls.Telegram)}>{width > 1000 ? "Telegram" : <Image src={"/tg.svg"} alt="Telegram" width={width > 700 ? 40 : width > 500 ? 30 : 24} height={width > 700 ? 40 : width > 500 ? 30 : 24} />} </a>
        </li>
        <li className={cls.List__item}>
          <a href="https://vk.com/kawodeda" target="_blank" rel="noopener" className={classNames(cls.Link, cls.VK)}>{width > 1000 ? "ВКОНТАКТЕ" : <Image src={"/vk.svg"} alt="ВКОНТАКТЕ" width={width > 700 ? 40 : width > 500 ? 30 : 24} height={width > 700 ? 40 : width > 500 ? 30 : 24} />} </a>
        </li>
      </ul>
      <ul role="list" className={classNames(cls.Header__list, cls.List, cls.ExtraList)}>
        <li className={cls.List__item}>
          <Image src="/account.svg" alt="Аккаунт" width={width > 1000 ? 22 : width > 700 ? 28 : width > 500 ? 22 : 18} height={width > 1000 ? 22 : width > 700 ? 28 : width > 500 ? 22 : 18} />
        </li>
        <li className={cls.List__item}>{width > 1000 ? "Информация" : <Image src={"/info.svg"} alt={"Информация"} width={width > 700 ? 40 : width > 500 ? 30 : 24} height={width > 700 ? 40 : width > 500 ? 30 : 24} />}</li>
        <li className={cls.List__item}>{width > 1000
          ? "Корзина"
          : valueOfBoughtItems ? <div className={cls.ShoppingCart}>
            <span className={cls.ValueOfBoughtItems}>{valueOfBoughtItems}</span>
            <Image src={"/shoppingCart.svg"} alt={"Корзина"} width={width > 700 ? 40 : width > 500 ? 30 : 24} height={width > 700 ? 40 : width > 500 ? 30 : 24} />
          </div> : <Image src={"/shoppingCart.svg"} alt={"Корзина"} width={width > 700 ? 40 : width > 500 ? 30 : 24} height={width > 700 ? 40 : width > 500 ? 30 : 24} />}
        </li>
      </ul>
    </header>
  );
};
