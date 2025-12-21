"use client";

import Script from "next/script";

export function AdsenseScript() {
  return (
    <Script
      id="adsbygoogle-script"
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9591811085706785"
      crossOrigin="anonymous"
      onError={(e) => {
        console.error("Erro ao carregar o script do AdSense:", e);
      }}
      onLoad={() => {
        console.log("Script do AdSense carregado com sucesso");
      }}
    />
  );
}
