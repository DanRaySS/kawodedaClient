export interface IGood {
  id: number;
  title: string;
  alt: string | null;
  src: string;
  price: number;
  lastPrice: number | null;
  historyPrices: IHistoryPrices[];
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