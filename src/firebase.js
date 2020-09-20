//
//

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCrnlTeGN9qdB26nr20jZiREl1rAK4Zk5Y',
  authDomain: 'twitter-clone-react-b382c.firebaseapp.com',
  databaseURL: 'https://twitter-clone-react-b382c.firebaseio.com',
  projectId: 'twitter-clone-react-b382c',
  storageBucket: 'twitter-clone-react-b382c.appspot.com',
  messagingSenderId: '165811166573',
  appId: '1:165811166573:web:3f46d194a7f9f7a5a10e64',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
