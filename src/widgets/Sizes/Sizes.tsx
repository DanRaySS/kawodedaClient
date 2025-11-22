'use client';

import classNames from "classnames";
import cls from "./Sizes.module.scss";
import { ModifiedCheckbox } from "shared/ui/ModifiedCheckbox/ModifiedCheckbox";

interface ISizesProps {
  className?: string;
}

export const Sizes = ({ className }: ISizesProps) => {



  return (
    <div className={classNames(cls.Sizes, {}, [className])}>
      <ModifiedCheckbox disabled>
        M
      </ModifiedCheckbox>

      <ModifiedCheckbox>
        L
      </ModifiedCheckbox>

      <ModifiedCheckbox disabled>
        XL
      </ModifiedCheckbox>
    </div>
  );
};
