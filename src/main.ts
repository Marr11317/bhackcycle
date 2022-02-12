/// <reference types="svelte" />

import LoginGuard from './ui/LoginGuard.svelte';
import { initializeApp as initializeFirebaseApp } from "firebase/app";

initializeFirebaseApp({
  apiKey: "AIzaSyClWb9snAaau0p3gWecoCVMywUwIKgP7Eo",
  authDomain: "hackatown-2022.firebaseapp.com",
  projectId: "hackatown-2022",
  storageBucket: "hackatown-2022.appspot.com",
  messagingSenderId: "410454368204",
  appId: "1:410454368204:web:16fa9750c1621761564769"
});

const app = new LoginGuard({
	target: document.body
});

export default app;
