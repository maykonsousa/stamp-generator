import { NextResponse } from "next/server";
import { getTemplateData } from "@/lib/urlService";

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const { code } = params;
  const templateData = await getTemplateData(code);

  if (!templateData) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.redirect(new URL(`/?${templateData.params}`, request.url));
} 