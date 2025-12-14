'use client';

import classNames from "classnames";
import cls from "./Sizes.module.scss";
import { ModifiedCheckbox } from "shared/ui/ModifiedCheckbox/ModifiedCheckbox";
import { useCartStore } from "app/store/cart";
import { IGood } from "entities/Good";
import { SizesType, Sizes as SizesValues } from "entities/Good/model/types/good";

interface ISizesProps {
  className?: string;
}

export const Sizes = ({ className }: ISizesProps) => {

  const selectedItem = useCartStore((cart) => cart.selectedItem);
  const unselect = useCartStore((cart) => cart.unselect);
  const select = useCartStore((cart) => cart.select);

  const product: IGood = {
    id: 12312312,
    title: 'Товар какой-то',
    src: '/test2.png',
    price: 5000,
    alt: 'Какой-то товар',
    lastPrice: 4500,
    historyPrices: [],
    sizesWithQty: [
      {
        qty: 414,
        size: 'L',
      },
      {
        qty: 333,
        size: 'M',
      },
      {
        qty: 5555,
        size: 'XL',
      },
    ],
    qty: 10000,
    extra: 'asdasdsa',
    createdAt: new Date(),
    updatedAt: null
  };

  const onChange = (size: SizesType) => {
    if (selectedItem?.sizesWithQty?.find((s) => s.size === size)) {
      unselect();
    } else {
      select(product);
    }
  };

  return (
    <div className={classNames(cls.Sizes, {}, [className])}>
      <ModifiedCheckbox disabled content={SizesValues.M} onChange={(value) => onChange(value)}>
        M
      </ModifiedCheckbox>

      <ModifiedCheckbox onChange={(value) => onChange(value)} content={SizesValues.L} checked={!!selectedItem}>
        L
      </ModifiedCheckbox>

      <ModifiedCheckbox disabled content={SizesValues.XL} onChange={(value) => onChange(value)}>
        XL
      </ModifiedCheckbox>
    </div>
  );
};
