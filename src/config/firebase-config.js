import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB5tbBeaw9dJ4EeY-2sn4Z-wI7PXSqltYs",
  authDomain: "my-blog-c0a1a.firebaseapp.com",
  projectId: "my-blog-c0a1a",
  storageBucket: "my-blog-c0a1a.appspot.com",
  messagingSenderId: "193498724390",
  appId: "1:193498724390:web:078ec7a4fd2861a6560ee7",
  measurementId: "G-PKR04GSG6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);