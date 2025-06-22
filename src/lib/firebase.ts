import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "Paste your key"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics only on client side
let analytics: any = null;

if (typeof window !== 'undefined') {
  // Only import and initialize analytics on the client side
  import('firebase/analytics').then(({ getAnalytics }) => {
    try {
      analytics = getAnalytics(app);
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }).catch((error) => {
    console.warn('Failed to load analytics:', error);
  });
}

export { app, db, analytics }; 