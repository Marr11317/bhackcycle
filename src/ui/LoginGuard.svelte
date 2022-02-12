<script lang="ts">
  import LoginScreen from "./LoginScreen.svelte";
  import App from "./App.svelte";
  import auth from "../auth";
  import { onMount } from "svelte";
  import { initializeApp as initializeFirebaseApp } from "firebase/app";

  onMount(() => {
    initializeFirebaseApp({
      apiKey: "AIzaSyClWb9snAaau0p3gWecoCVMywUwIKgP7Eo",
      authDomain: "hackatown-2022.firebaseapp.com",
      projectId: "hackatown-2022",
      storageBucket: "hackatown-2022.appspot.com",
      messagingSenderId: "410454368204",
      appId: "1:410454368204:web:16fa9750c1621761564769",
    });
    
    setTimeout(() => {
      logged = auth.isLoggedIn();
      isInitialized = true
    }, 1000);
  });

  let isInitialized = false;
  let logged: boolean | null = null
  let signup = false;
  let currentError = "";

  function validate(
    email: string,
    passwordInput: string,
    confirmPasswordInput: string,
    signup: boolean
  ): string {
    // TODO
    if (signup && passwordInput !== confirmPasswordInput) {
      return "Passwords do not match";
    }
    return "";
  }

  async function submit(event) {
    const { email, password, confirmPassword, signup } = event.detail;

    const error = validate(email, password, confirmPassword, signup);
    if (error != "") {
      currentError = error;
      return;
    }

    if (signup) {
      // auth.signup(email, password);
    } else {
      console.log("login");
      if (await auth.login(email, password)) {
        logged = true;
      } else {
        currentError = "Invalid email or password";
      }
    }
  }
</script>

<ion-app>
  {#if isInitialized}
    {#if !logged}
      <LoginScreen errorNote={currentError} bind:signup on:submit={submit} />
    {:else}
      <App />
    {/if}
  {/if}
</ion-app>

<style>
</style>
