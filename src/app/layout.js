import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "索飞AI - 道路养护，工程安全认知大模型",
  description: "基于 2 千亿 MoE 模型底座的工程安全认知大模型，致力于实现类人智慧的通用工程智能",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
