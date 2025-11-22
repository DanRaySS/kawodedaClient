import classNames from "classnames";
import type { Metadata } from "next";
import 'shared/styles/index.scss';

export const metadata: Metadata = {
  title: 'Kawodeda',
  description: 'Интернет-магазин kawodeda. Продажа мерча.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={classNames('app', 'app-light-theme')}
      >
        {children}
      </body>
    </html>
  );
}
