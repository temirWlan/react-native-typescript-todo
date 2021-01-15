import firebase from 'firebase';
import '@firebase/firebase';

import firebaseConfig from '../configs/firebase';


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
	firebase,
	db
};
