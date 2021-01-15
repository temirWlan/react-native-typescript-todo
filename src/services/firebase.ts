import firebase from 'firebase';
import '@firebase/firebase';

import firebaseConfig from '../configs/firebase';


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
	firebase,
	db
};

// export default class Firebase {
// 	constructor(callback) {
// 		this.init(callback);
// 	}

// 	init(callback) {
// 		if (!firebase.apps.length) {
// 			firebase.initializeApp(firebaseConfig);
// 		}

// 		firebase.auth().onAuthStateChange(user => {
// 			if (user) {
// 				callback(null, user);
// 			} else {
// 				firebase
// 					.auth()
// 					.signInAnonymously()
// 					.catch(err => )
// 			}
// 		});
// 	}
// }