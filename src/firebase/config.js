import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyClk9as3ZPKRWUKndZevFLisbseoITcN9w',
  authDomain: 'miniblog-5c26f.firebaseapp.com',
  projectId: 'miniblog-5c26f',
  storageBucket: 'miniblog-5c26f.appspot.com',
  messagingSenderId: '1072795305082',
  appId: '1:1072795305082:web:68481a98b355a6176527c3',
  measurementId: 'G-0Y9JQZSH0C',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
