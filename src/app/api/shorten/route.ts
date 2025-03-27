import { NextResponse } from "next/server";
import { createShortUrl } from "@/lib/urlService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text, backgroundColor, strokeColor, format } = body;

    if (!text || !backgroundColor || !strokeColor || !format) {
      return NextResponse.json(
        { error: "Parâmetros obrigatórios não fornecidos" },
        { status: 400 }
      );
    }

    const shortCode = await createShortUrl({
      text,
      backgroundColor,
      strokeColor,
      format
    });

    const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/r/${shortCode}`;

    return NextResponse.json({ shortUrl });
  } catch (error) {
    console.error("Erro ao encurtar URL:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
} 