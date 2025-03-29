// Импортируем шрифт из Google через next/font
import { Inter } from 'next/font/google';

// Загружаем шрифт и присваиваем его переменной на уровне модуля
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Проекты',
  description: 'Gen Z brain rot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
