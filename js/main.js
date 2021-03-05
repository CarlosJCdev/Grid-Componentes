var firebaseConfig = {
    apiKey: "AIzaSyDzGkNoD97HzevV3NzQFOfrqDAxef5bOvA",
    authDomain: "blog-8da2f.firebaseapp.com",
    databaseURL: "https://blog-8da2f.firebaseio.com",
    projectId: "blog-8da2f",
    storageBucket: "blog-8da2f.appspot.com",
    messagingSenderId: "623866781211",
    appId: "1:623866781211:web:b5ba2a721f657ad724a2be"
};
firebaseConfig.initializeApp(firebaseConfig);

const db = firebase.firestore();