import "./globals.css";

export const metadata = {
  title: "爪爪日和 PAWDAY — 洗去小烦恼，蓬松好心情",
  description:
    "爪爪日和宠物洗护空间，为猫猫狗狗准备的温柔洗护、精致修剪与轻松时光。",
};
export const viewport = { themeColor: "#e8eee5" };

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
