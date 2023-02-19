import { initializeApp } from 'firebase/app';

let firebaseConfig;

const setupFirebase = () => {
  firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API,
    authDomain: `${process.env.NEXT_PUBLIC_GOOGLE_PRODJECT_ID}.firebaseapp.com`,
    projectId: process.env.NEXT_PUBLIC_GOOGLE_PRODJECT_ID,
    storageBucket: `${process.env.NEXT_PUBLIC_GOOGLE_PRODJECT_ID}.appspot.com`,
    messagingSenderId: process.env.NEXT_PUBLIC_GOOGLE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_GOOGLE_APP_ID,
  };

  initializeApp(firebaseConfig);
};

export const firebaseApp = () => {
  if (firebaseConfig) {
    return initializeApp(firebaseConfig);
  }

  return setupFirebase();
};
