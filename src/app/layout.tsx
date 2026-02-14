import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'STACK — Bold E-commerce',
  description: 'A distinctive e-commerce experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}