"use client";

import { Link } from "@mui/material";
import React from "react";
import { CopyRight, FooterContainer } from "./Footer.styles";

export function Footer() {
  return (
    <FooterContainer>
      <CopyRight variant="body1">
        © 2025, Desenvolvido por{" "}
        <Link href="http://maykonsousa.dev.br">Maykon Sousa</Link>
      </CopyRight>
    </FooterContainer>
  );
}
