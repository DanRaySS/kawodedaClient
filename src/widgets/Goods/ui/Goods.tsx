import classNames from "classnames";
import { Good, IGood } from "entities/Good";
import cls from "./Goods.module.scss";

interface IGoodsProps {
  className?: string;
}

export const Goods = ({ className }: IGoodsProps) => {

  const goods: IGood[] = [
    {
      title: 'Футболка Absurd NSX',
      alt: 'Футболка Absurd NSX',
      price: 3349,
      lastPrice: null,
      historyPrices: [
        {
          dataLength: 1,
          data: [
            {
              date: new Date("2025-08-21"),
              price: 3349,
            },
          ]
        }
      ],
      src: '/test.png',
      extra: {},
      createdAt: new Date("2025-08-21"),
      updatedAt: null,
    },
    {
      title: 'Футболка Absurd Shit Happens',
      alt: 'Футболка Absurd Shit Happens',
      price: 3649,
      lastPrice: 3349,
      historyPrices: [
        {
          dataLength: 2,
          data: [
            {
              date: new Date("2025-08-21"),
              price: 3349,
            },
            {
              date: new Date("2025-08-22"),
              price: 3649,
            },
          ]
        }
      ],
      src: '/test2.png',
      extra: {},
      createdAt: new Date("2025-08-21"),
      updatedAt: new Date("2025-08-22"),
    },
    {
      title: 'ФУТБОЛКА ABSURD My live my rules',
      alt: 'ФУТБОЛКА ABSURD My live my rules',
      price: 3329,
      lastPrice: 3800,
      historyPrices: [
        {
          dataLength: 3,
          data: [
            {
              date: new Date("2025-08-01"),
              price: 3200,
            },
            {
              date: new Date("2025-09-05"),
              price: 3800,
            },
            {
              date: new Date("2025-09-22"),
              price: 3349,
            },
          ]
        }
      ],
      src: '/test3.png',
      extra: {},
      createdAt: new Date("2025-08-01"),
      updatedAt: new Date("2025-09-22"),
    },
    {
      title: 'Худи LOGO ABSURD DRIVE',
      alt: 'Худи LOGO ABSURD DRIVE',
      price: 6990,
      lastPrice: null,
      historyPrices: [
        {
          dataLength: 1,
          data: [
            {
              date: new Date("2025-09-20"),
              price: 6990,
            },
          ]
        }
      ],
      src: '/test4.png',
      extra: {},
      createdAt: new Date("2025-11-15"),
      updatedAt: null,
    },
  ];


  return (
    <div className={classNames(cls.Goods, {}, [className])}>
      <div className={cls.Goods__container}>
        {goods.sort(((a, b) => b.createdAt.getTime() - a.createdAt.getTime())).map((good: IGood) => (
          <Good
            key={good.src}
            
            {...good}
          />
        ))}
      </div>
    </div>
  );
};
