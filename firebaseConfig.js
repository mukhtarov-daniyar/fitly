import firebase from 'firebase/app';
import 'firebase/firestore';  // Для использования Firestore

// Конфигурация Firebase, обычно включает apiKey, authDomain и т.д.
import firebaseConfig from './google-services.json';

// Инициализация Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
