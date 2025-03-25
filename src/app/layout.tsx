import { ThemeProvider } from "@/providers";
import React from "react";

import { Metadata } from "next";
import { DefaultLayoutContainer, Main, PageContainer } from "./layout.styles";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_URL ?? ""),
  title: "Stamp Generator",
  description:
    "Crie seu próprio selo personalizado para usar em seu avatar no Linkedin ou qualquer outra rede social ou plataforma.",
  openGraph: {
    title: "Stamp Generator",
    description:
      "Crie seu próprio selo personalizado para usar em seu avatar no Linkedin ou qualquer outra rede social ou plataforma.",
    images: [
      {
        url: "/newMetadataImg.webp",
        width: 1200,
        height: 627,
        alt: "Stamp Generator",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <ThemeProvider>
        <body>
          <PageContainer>
            <DefaultLayoutContainer>
              <Header />
              <Main>{children}</Main>
            </DefaultLayoutContainer>
          </PageContainer>
        </body>
      </ThemeProvider>
    </html>
  );
}
