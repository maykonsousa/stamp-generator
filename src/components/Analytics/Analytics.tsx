"use client";

import Script from "next/script";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return gaId ? (
    <>
      
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  ) : null;
}
