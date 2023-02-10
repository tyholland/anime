import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API,
  authDomain: `${process.env.NEXT_PUBLIC_GOOGLE_PRODJECT_ID}.firebaseapp.com`,
  projectId: process.env.NEXT_PUBLIC_GOOGLE_PRODJECT_ID,
  storageBucket: `${process.env.NEXT_PUBLIC_GOOGLE_PRODJECT_ID}.appspot.com`,
  messagingSenderId: process.env.NEXT_PUBLIC_GOOGLE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_GOOGLE_APP_ID,
};

export const firebaseApp = () => {
  initializeApp(firebaseConfig);
};
