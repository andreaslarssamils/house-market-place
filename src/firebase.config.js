import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAnxth5IkQx9hwQP2e2xgFH9hOaNhJbvRk',
  authDomain: 'rent-and-buy-housing.firebaseapp.com',
  projectId: 'rent-and-buy-housing',
  storageBucket: 'rent-and-buy-housing.appspot.com',
  messagingSenderId: '95769410652',
  appId: '1:95769410652:web:057730c07e51c21438ba99',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
