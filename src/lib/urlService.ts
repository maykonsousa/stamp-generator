import { adminDb } from './firebase-admin';

const COLLECTION_NAME = process.env.FIREBASE_COLLECTION || 'template';

// Função para gerar um código curto único
function generateShortCode(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

interface TemplateData {
  shortCode: string;
  params: string;
  createdAt: Date;
}

export async function createShortUrl(params: { text: string; backgroundColor: string; strokeColor: string; format: string }): Promise<string> {
  const shortCode = generateShortCode();
  
  const searchParams = new URLSearchParams();
  searchParams.append('stamp', params.text);
  searchParams.append('bgColor', params.backgroundColor);
  searchParams.append('textColor', params.strokeColor);
  searchParams.append('format', params.format);
  
  await adminDb.collection(COLLECTION_NAME).add({
    shortCode,
    params: searchParams.toString(),
    createdAt: new Date()
  });

  return shortCode;
}

export async function getTemplateData(shortCode: string): Promise<TemplateData | null> {
  const snapshot = await adminDb
    .collection(COLLECTION_NAME)
    .where('shortCode', '==', shortCode)
    .limit(1)
    .get();
  
  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toDate()
  } as TemplateData;
} 