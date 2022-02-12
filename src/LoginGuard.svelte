<script lang="ts">
    import SignupScreen from "./SignupScreen.svelte";
    import LoginScreen from "./LoginScreen.svelte";
    import App from "./App.svelte";

    import { isLoggedIn } from './auth';

    let logged = isLoggedIn();
    let signup = false;
</script>

<ion-app>
	{#if !logged}
        {#if signup}
        <SignupScreen/>
        <ion-button on:click="{() => signup = false }">Sign-in instead</ion-button>
        {:else}
        <LoginScreen/>
        <ion-button  on:click="{() => signup = true }">Sign-up instead</ion-button>
        {/if}
    {:else}
    <App/>
    {/if}
</ion-app>

<style>

</style>
