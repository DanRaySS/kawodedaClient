import classNames from "classnames";
import cls from "./ProductPage.module.scss";
import Image from "next/image";
import { Sizes } from "widgets/Sizes/Sizes";

interface IProductPageProps {
  className?: string;
  params: { id: string; };
}

export default async function ProductPage(props: IProductPageProps) {
  const {
    params,
    className
  } = props;

  // const product = await fetch(`https://api.example.com/products/${params.id}`)
  // .then(res => res.json());

  const { id } = await params;

  const price = 1490;

  return (
    <div className={classNames(cls.ProductPage, {}, [className])}>
      <div className={cls.ProductPage__container}>
        <div className={cls.ProductPage__photos}>
          {/* {photos.map((photo) => <Image key={photo.id} src={photo.src} alt={photo.alt} width={330} height={190} />)} */}
          <Image src={'/test.png'} alt={'TEST'} width={330} height={190} className={cls.ProductPage__img} />
          <Image src={'/test.png'} alt={'TEST'} width={330} height={190} className={cls.ProductPage__img} />
          <Image src={'/test.png'} alt={'TEST'} width={330} height={190} className={cls.ProductPage__img} />
        </div>
        <div className={cls.ProductPage__content}>
          <header className={cls.ProductPage__header}>
            <h1 className={cls.ProductPage__title}>
              Какой-то товар c id: {id}
            </h1>
            <span className={cls.ProductPage__subTitle}>Артикул: {id}</span>
          </header>
          <span className={cls.ProductPage__price}>{`${price.toLocaleString('ru-RU')} р.`}</span>
          <Sizes className={cls.Sizes} />
          <button className={cls.ProductPage__btn}>В корзину</button>
          <div className={cls.ProductPage__description}>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint odit voluptatum minus animi ex enim cum, ratione explicabo impedit soluta at eligendi et ipsa repellat ut. Aspernatur, ut fugiat.</span>
            <br />
            <br />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint odit voluptatum minus animi ex enim cum, ratione explicabo impedit soluta at eligendi et ipsa repellat ut. Aspernatur, ut fugiat.</span>
            <br />
            <br />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint odit voluptatum minus animi ex enim cum, ratione explicabo impedit soluta at eligendi et ipsa repellat ut. Aspernatur, ut fugiat.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
