<script lang="ts">
  import LoginScreen from "./LoginScreen.svelte";
  import App from "./App.svelte";
  import auth from "../auth";
  import { onMount } from "svelte";
  import { initializeApp as initializeFirebaseApp } from "firebase/app";
  import { getAuth } from "firebase/auth";

  import { logged } from "../app-state";

  onMount(() => {
    initializeFirebaseApp({
      apiKey: "AIzaSyClWb9snAaau0p3gWecoCVMywUwIKgP7Eo",
      authDomain: "hackatown-2022.firebaseapp.com",
      projectId: "hackatown-2022",
      storageBucket: "hackatown-2022.appspot.com",
      messagingSenderId: "410454368204",
      appId: "1:410454368204:web:16fa9750c1621761564769",
    });

    getAuth().onAuthStateChanged((user) => {
      $logged = !!user;
      isInitialized = true;
    });
  });

  let isInitialized = false;
  let signup = false;
  let currentError = "";

  function validate(
    name,
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
    const { name, email, password, confirmPassword, signup } = event.detail;

    const error = validate(name, email, password, confirmPassword, signup);
    if (error != "") {
      currentError = error;
      return;
    }

    if (signup) {
      if (await auth.signUp(name, email, password)) {
        currentError = "";
        $logged = true;
      } else {
        currentError = "Signup failed";
      }
    } else {
      if (await auth.login(email, password)) {
        currentError = "";
        $logged = true;
      } else {
        currentError = "Invalid email or password";
      }
    }
  }
</script>

<ion-app>
  {#if isInitialized}
    {#if !$logged}
      <LoginScreen errorNote={currentError} bind:signup on:submit={submit} />
    {:else}
      <App />
    {/if}
  {/if}
</ion-app>

<style>
</style>
