import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const COLLECTION_NAME = process.env.NEXT_PUBLIC_FIREBASE_COLLECTION || 'template';

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
  
  await addDoc(collection(db, COLLECTION_NAME), {
    shortCode,
    params: searchParams.toString(),
    createdAt: new Date()
  });

  return shortCode;
}

export async function getTemplateData(shortCode: string): Promise<TemplateData | null> {
  const templateRef = collection(db, COLLECTION_NAME);
  const q = query(templateRef, where('shortCode', '==', shortCode));
  const querySnapshot = await getDocs(q);
  
  if (querySnapshot.empty) {
    return null;
  }

  const doc = querySnapshot.docs[0];
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toDate()
  } as TemplateData;
} 