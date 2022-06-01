import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCNbDUCb10gqwLiKKLcn1C-J0Lp2y19zaQ",
  authDomain: "login-app-d1460.firebaseapp.com",
  projectId: "login-app-d1460",
  storageBucket: "login-app-d1460.appspot.com",
  messagingSenderId: "964449938149",
  appId: "1:964449938149:web:f2aededf9acf359f35420c"
};

app.initializeApp(firebaseConfig);
const baseDatos= app.firestore()
const auth= app.auth()

export {baseDatos, auth, app}