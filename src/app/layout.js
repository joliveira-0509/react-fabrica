import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/modules/Header/header.js";

export default function RootLayout({ children }) {
  return (
    <html lang="pr-br">
      <body >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}


