export interface IGood {
  id: number;
  title: string;
  alt: string | null;
  src: string;
  price: number;
  lastPrice: number | null;
  historyPrices: IHistoryPrices[];
  sizesWithQty?: {
    size: SizesType;
    qty: number;
  }[];
  qty: number;
  extra: unknown;
  createdAt: Date;
  updatedAt: Date | null;
}

interface IHistoryPrices {
  dataLength: number;
  data: {
    date: Date;
    price: number;
  }[];
}

export const Sizes = {
  M: 'M',
  L: 'L',
  XL: 'XL',
} as const;

export type SizesType = keyof typeof Sizes;