import firebase from 'firebase'
// import 'firebase/firebase-firestore'
import 'firebase/auth'

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsYQHf68p2QkuIdmhMuxAeLUPRFsWF0oQ",
  authDomain: "users-list-f9bd6.firebaseapp.com",
  databaseURL: "https://users-list-f9bd6.firebaseio.com",
  projectId: "users-list-f9bd6",
  storageBucket: "users-list-f9bd6.appspot.com",
  messagingSenderId: "967891017184",
  appId: "1:967891017184:web:fc52c29838e22a48fbdf85",
  measurementId: "G-0FJLJG15H1"
})

// let db = firebase.auth()
// db.settings({ timestampsInSnapshots: true })

// export default db
export default firebaseApp



/*

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCsYQHf68p2QkuIdmhMuxAeLUPRFsWF0oQ",
    authDomain: "users-list-f9bd6.firebaseapp.com",
    databaseURL: "https://users-list-f9bd6.firebaseio.com",
    projectId: "users-list-f9bd6",
    storageBucket: "users-list-f9bd6.appspot.com",
    messagingSenderId: "967891017184",
    appId: "1:967891017184:web:fc52c29838e22a48fbdf85",
    measurementId: "G-0FJLJG15H1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/