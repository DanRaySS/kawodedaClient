import classNames from "classnames";
import Image from "next/image";
import cls from "./Header.module.scss";
import Link from "next/link";

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  const getValueOfBoughtItems = 1000;

  const valueOfBoughtItems = getValueOfBoughtItems >= 1000 ? "10>" : getValueOfBoughtItems;

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <Link className={cls.LogoWrapper} href={"/"}>
          {/* Kawodeda */}
          <Image src={"/title.png"} alt={"Каводеда Лого"} fill priority />
      </Link>
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
