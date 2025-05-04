import { ThemeProvider } from "@/providers";
import React from "react";

import { Metadata } from "next";
import { DefaultLayoutContainer, Main, PageContainer } from "./layout.styles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_URL ?? ""),
  title: "Stamp Generator",
  description:
    "Crie seu próprio selo personalizado para usar em seu avatar no Linkedin ou qualquer outra rede social ou plataforma.",
  keywords:
    "selo personalizado, foto de perfil, linkedin, avatar personalizado, carimbo virtual",
  openGraph: {
    title: "Stamp Generator",
    description:
      "Crie seu próprio selo personalizado para usar em seu avatar no Linkedin ou qualquer outra rede social ou plataforma.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/newMetadataImg.webp",
        width: 1200,
        height: 627,
        alt: "Stamp Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stamp Generator",
    description:
      "Crie seu próprio selo personalizado para usar em seu avatar no Linkedin ou qualquer outra rede social ou plataforma.",
    images: ["/newMetadataImg.webp"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
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
          <meta
            name="google-adsense-account"
            content="ca-pub-9591811085706785"
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
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

          {/* Carrega o script do AdSense após o carregamento do conteúdo principal */}
          <Script
            id="adsbygoogle-script"
            strategy="lazyOnload"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9591811085706785"
            crossOrigin="anonymous"
          />
        </body>
      </ThemeProvider>
    </html>
  );
}
