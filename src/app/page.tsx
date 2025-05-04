import { LandingPageStaticContent } from "@/components/pages/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stamp Generator - Crie seu selo personalizado para redes sociais",
  description:
    "Ferramenta gratuita para criar selos personalizados para seu avatar no LinkedIn, Instagram, Facebook e outras redes sociais. Customize cores, textos e formatos facilmente.",
};

export default function Home() {
  return <LandingPageStaticContent />;
}
