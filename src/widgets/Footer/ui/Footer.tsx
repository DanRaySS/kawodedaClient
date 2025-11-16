'use client';

import classNames from "classnames";
import cls from './Footer.module.scss';
import { useWindowWidth } from "shared/hooks/useWindowWidth";
import Image from "next/image";

interface IFooterProps {
  className?: string;
}

export const Footer = (props: IFooterProps) => {
  const {
    className
  } = props;

  const width = useWindowWidth();

  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
      <div className={cls.Footer__container}>
        <ul role="list" className={classNames(cls.Footer__list, cls.List, cls.SocialList)}>
          <li className={cls.List__item}>
            <a
              href="https://www.youtube.com/@KawoDeda"
              target="_blank"
              rel="noopener"
              className={classNames(cls.Link, cls.Youtube)}>
              {width > 500
                ? "Youtube"
                : <Image src={"/yt.svg"}
                  alt="Youtube"
                  width={width > 400 ? 40 : 30}
                  height={width > 400 ? 40 : 30}
                />}
            </a>
          </li>
          <li className={cls.List__item}>
            <a
              href="https://t.me/bIbok_kawodeda"
              target="_blank"
              rel="noopener"
              className={classNames(cls.Link, cls.Telegram)}>
              {width > 500
                ? "Telegram"
                : <Image
                  src={"/tg.svg"}
                  alt="Telegram"
                  width={width > 400 ? 40 : 30}
                  height={width > 400 ? 40 : 30} />}
            </a>
          </li>
          <li className={cls.List__item}>
            <a
              href="https://vk.com/kawodeda"
              target="_blank"
              rel="noopener"
              className={classNames(cls.Link, cls.VK)}>
              {width > 500
                ? "ВКОНТАКТЕ"
                : <Image
                  src={"/vk.svg"}
                  alt="ВКОНТАКТЕ"
                  width={width > 400 ? 40 : 30}
                  height={width > 400 ? 40 : 30}
                />}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};