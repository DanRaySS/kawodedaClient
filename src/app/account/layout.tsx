import type { Metadata } from "next";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

export const metadata: Metadata = {
  title: 'Каводеда личный кабинент',
  description: 'Зайти в личный кабинет Kawodeda',
};

export default function InformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header isVisibleBackBtn />
      {children}
      <Footer />
    </>
  );
}
