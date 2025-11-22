import classNames from "classnames";
import cls from './Footer.module.scss';
import Image from "next/image";

interface IFooterProps {
  className?: string;
}

export const Footer = (props: IFooterProps) => {
  const {
    className
  } = props;

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
              <Image
                src={"/yt.svg"}
                alt="Youtube"
                fill
                priority
              />
            </a>
          </li>
          <li className={cls.List__item}>
            <a
              href="https://t.me/bIbok_kawodeda"
              target="_blank"
              rel="noopener"
              className={classNames(cls.Link, cls.Telegram)}>
              <Image
                src={"/tg.svg"}
                alt="Telegram"
                fill
                priority
              />
            </a>
          </li>
          <li className={cls.List__item}>
            <a
              href="https://vk.com/kawodeda"
              target="_blank"
              rel="noopener"
              className={classNames(cls.Link, cls.VK)}>
              <Image
                src={"/vk.svg"}
                alt="ВКОНТАКТЕ"
                fill
                priority
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};