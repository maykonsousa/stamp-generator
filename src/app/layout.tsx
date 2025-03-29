import { ThemeProvider } from "@/providers";
import React from "react";

import { Metadata } from "next";
import { DefaultLayoutContainer, Main, PageContainer } from "./layout.styles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

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
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9591811085706785"
            crossOrigin="anonymous"
          ></script>
        </head>
        <body>
          <PageContainer>
            <DefaultLayoutContainer>
              <Header />
              <Main>{children}</Main>
              <Footer />
            </DefaultLayoutContainer>
          </PageContainer>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
