"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";

interface AdsenseProps {
  adSlot: string;
  adFormat?: "auto" | "horizontal" | "vertical" | "rectangle";
  style?: React.CSSProperties;
}

export function Adsense({ adSlot, adFormat = "auto", style }: AdsenseProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - A propriedade adsbygoogle não existe no objeto window
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("Erro ao carregar anúncio:", error);
    }
  }, []);

  return (
    <Box
      className="adsbygoogle-container"
      sx={{
        display: "block",
        textAlign: "center",
        my: 2,
        overflow: "hidden",
        minHeight: "100px",
        width: "100%",
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
        }}
        data-ad-client="ca-pub-9591811085706785"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      ></ins>
    </Box>
  );
}
