import type { Metadata } from "next";
import { ReactNode } from "react";
import "../../styles/global.scss";

export const metadata: Metadata = {
  title: "GemSoft Test Task",
  description: "Nechaev M.A. test task in Gemsoft",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body>{children}</body>
    </html>
  );
}
