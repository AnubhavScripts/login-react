import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAQP0_A2cHZJ-kn8YHI84f5MbACVHLMqdA",
    authDomain: "signup-8b349.firebaseapp.com",
    projectId: "signup-8b349",
    storageBucket: "signup-8b349.appspot.com",
    messagingSenderId: "1051986287478",
    appId: "1:1051986287478:web:bf80797156c35eed787857",
    measurementId: "G-47KSJWDDJP",
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;