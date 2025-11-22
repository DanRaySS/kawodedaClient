import type { Metadata } from "next";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

export const metadata: Metadata = {
  title: 'Каводеда информация',
  description: 'Информация о магазине kawodeda',
};

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
