'use client';

import classNames from "classnames";
import Image from "next/image";
import cls from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "app/store/cart";

interface IHeaderProps {
  className?: string;
  isProduct?: boolean;
}

export const Header = ({ className, isProduct = false }: IHeaderProps) => {
  const router = useRouter();

  const products = useCartStore((cart) => cart.items);

  console.log(products);

  const valueOfBoughtItems = products?.length >= 1000 ? "10>" : products?.length;

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      {isProduct && <div style={{paddingLeft: 30}}><button type="button" onClick={() => router.back()}>Назад</button></div>}
      <ul role="list" className={classNames(cls.Header__list, cls.List, cls.SocialList)}>
        <li className={classNames(cls.List__item, cls.Youtube)}>
          <a href="https://www.youtube.com/@KawoDeda" target="_blank" rel="noopener" className={cls.Link}>
            <Image src={"/yt.svg"} alt="Youtube" fill priority />
          </a>
        </li>
        <li className={classNames(cls.List__item, cls.Telegram)}>
          <a href="https://t.me/bIbok_kawodeda" target="_blank" rel="noopener" className={cls.Link}>
            <Image src={"/tg.svg"} alt="Telegram" fill priority />
          </a>
        </li>
        <li className={classNames(cls.List__item, cls.VK)}>
          <a href="https://vk.com/kawodeda" target="_blank" rel="noopener" className={cls.Link}>
            <Image src={"/vk.svg"} alt="ВКОНТАКТЕ" fill priority />
          </a>
        </li>
      </ul>
      <ul role="list" className={classNames(cls.Header__list, cls.List, cls.ExtraList)}>
        <li className={classNames(cls.List__item, cls.Account)}>
          <Image src="/account.svg" alt="Аккаунт" fill priority />
        </li>
        <li className={classNames(cls.List__item, cls.Info)}>
          <Link href={'/information'}>
          <Image src={"/info.svg"} alt="Информация" fill priority />
          </Link>
        </li>
        <li className={classNames(cls.List__item, cls.ShoppingCart)}>
          {valueOfBoughtItems ? <div className={cls.ShoppingCartWrapper}>
            <span className={cls.ValueOfBoughtItems}>{valueOfBoughtItems}</span>
            <Image src="/shoppingCart.svg" alt="Корзина" fill priority />
          </div> : <Image src="/shoppingCart.svg" alt="Корзина" fill priority />}
        </li>
      </ul>
    </header>
  );
};
