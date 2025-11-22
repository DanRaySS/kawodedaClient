import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

export type Params = Promise<{ id: string }>

export async function generateMetadata({params}: {params: Params}) {
  const { id } = await params;

  return {
    title: `Товар #${id} в kawodeda`,
    description: `Купить #${id} в магазине kawodeda`,
  };
}

export default async function InformationLayout({ children, params }: { children: React.ReactNode, params: Params }) {
  const { id } = await params;
  console.log(id);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
