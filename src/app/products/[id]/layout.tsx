import type { Metadata } from "next";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

// export const metadata: Metadata = {
//   title: 'Товар в kawodeda',
//   description: 'Купить в магазине kawodeda',
// };

export async function generateMetadata({ params }) {
  // const product = await fetch(`https://api.example.com/products/${params.id}`).then(r => r.json());

  return {
    // title: product.title,
    // description: product.description,
    title: `Товар #${params.id} в kawodeda`,
    description: `Купить #${params.id} в магазине kawodeda`,
  };
}

export default function InformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
