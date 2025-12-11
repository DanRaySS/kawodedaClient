'use client';

import classNames from "classnames";
import cls from "./AddToCart.module.scss";
import { Button } from "shared/ui/Button/Button";
import { useCartStore } from "app/store/cart";

interface IAddToCartProps {
  className?: string;
}

export const AddToCart = ({ className }: IAddToCartProps) => {
  const add = useCartStore((s) => s.add);
  const selectedItem = useCartStore((s) => s.selectedItem);

  const addHandle = () => {
    if (selectedItem) {
      add(selectedItem);
    }
  }

  return (
    <Button
      className={classNames(cls.Button, className)}
      type="button"
      onClick={() => addHandle()}
      disabled={!selectedItem}
    >
      В корзину
    </Button>
  );
};
