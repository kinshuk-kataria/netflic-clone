import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA7jz_Q6E1HN-dQdLbAkz3lfhKK5iWbRk4',
  authDomain: 'netflix-clone-b4b40.firebaseapp.com',
  projectId: 'netflix-clone-b4b40',
  storageBucket: 'netflix-clone-b4b40.appspot.com',
  messagingSenderId: '56000533094',
  appId: '1:56000533094:web:ca3df68db9f5963ca093a7'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
