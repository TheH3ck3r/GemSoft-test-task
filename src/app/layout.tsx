import type { Metadata } from "next";
import { ReactNode } from "react";
import "./global.scss";
import { Page } from "@/components/Page";

export const metadata: Metadata = {
  title: "GemSoft Test Task",
  description: "Nechaev M.A. test task in Gemsoft",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
