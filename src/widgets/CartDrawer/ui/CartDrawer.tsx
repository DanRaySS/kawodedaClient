'use client';

import Image from 'next/image';
import classNames from 'classnames';
import cls from './CartDrawer.module.scss';
import { useCartStore } from 'app/store/cart';
import { getTextOverflow } from 'widgets/Header/helpers/getTextOverflow';
import { Button } from 'shared/ui/Button/Button';

export const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    increase,
    decrease,
    remove,
  } = useCartStore();

  return (
    <>
      {isCartOpen && <div className={cls.Backdrop} onClick={closeCart} />}

      <aside
        className={classNames(cls.Drawer, {
          [cls.open]: isCartOpen,
        })}
      >
        {/* ❌ Кнопка закрытия */}
        <button
          className={cls.Close}
          onClick={closeCart}
          aria-label="Закрыть корзину"
        >
          ✕
        </button>

        <h2 className={cls.Title}>Оформление заказа</h2>

        <div className={cls.Items}>
          {items.map((item) => (
            <div key={item.id} className={cls.Item}>
              <Image
                src={item.src}
                alt={item.alt ?? item.title}
                width={70}
                height={70}
              />

              <span className={cls.Name}>{getTextOverflow(item.title, 20)}</span>

              <div className={cls.Qty}>
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>

              <span className={cls.Price}>{item.price} ₽</span>

              <button
                className={cls.Remove}
                onClick={() => remove(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className={cls.Footer}>
          <Button className={cls.Pay}>
            Оплатить
          </Button>
        </div>
      </aside>
    </>
  );
};
