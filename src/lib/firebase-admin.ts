import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

if (!getApps().length) {
  try {
    let privateKey = process.env.FIREBASE_PRIVATE_KEY;
    
    if (!privateKey) {
      throw new Error('FIREBASE_PRIVATE_KEY não está definida');
    }

    privateKey = privateKey
      .replace(/^["']|["']$/g, '')
      .replace(/\\n/g, '\n');

    if (!privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
      throw new Error('Formato inválido da chave privada');
    }

    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey
      }),
    });
  } catch (error) {
    console.error('Erro ao inicializar Firebase Admin:', error);
    throw error;
  }
}

export const adminDb = getFirestore(); 