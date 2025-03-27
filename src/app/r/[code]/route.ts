import { NextRequest, NextResponse } from "next/server";
import { getTemplateData } from "@/lib/urlService";

type Params = Promise<{ code: string }>;

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { code } = await params;
  
  const templateData = await getTemplateData(code);

  if (!templateData) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.redirect(new URL(`/?${templateData.params}`, request.url));
} 