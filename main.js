import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAdHHsRkyP31jttTXEnSuTM4uYIudL1BTU",
    authDomain: "data-test-6a133.firebaseapp.com",
    databaseURL: "https://data-test-6a133-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "data-test-6a133",
    storageBucket: "data-test-6a133.appspot.com",
    messagingSenderId: "1059185131862",
    appId: "1:1059185131862:web:fdef9c0354d402e67616f7",
    measurementId: "G-L564FE5HGW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);