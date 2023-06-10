import { FirebaseOptions, initializeApp } from 'firebase/app';

let firebaseConfig: FirebaseOptions;

const setupFirebase = () => {
  firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API,
    authDomain: `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}.com`,
    projectId: process.env.NEXT_PUBLIC_GOOGLE_PRODJECT_ID,
    storageBucket: `${process.env.NEXT_PUBLIC_GOOGLE_PRODJECT_ID}.appspot.com`,
    messagingSenderId: process.env.NEXT_PUBLIC_GOOGLE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_GOOGLE_APP_ID,
  };

  initializeApp(firebaseConfig);
};

export const firebaseApp = () => {
  if (firebaseConfig) {
    return;
  }

  return setupFirebase();
};
