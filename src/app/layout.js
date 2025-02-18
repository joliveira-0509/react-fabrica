"use client"
import "./globals.css";
import Header from "@/components/header/Header.js";

export default function RootLayout({ children }) {
  return (
    <html lang="pr-br">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}


