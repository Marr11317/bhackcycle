<script lang="ts">
    import SignupScreen from "./SignupScreen.svelte";
    import LoginScreen from "./LoginScreen.svelte";
    import App from "./App.svelte";

    import auth from './auth';

    let logged = auth.isLoggedIn();
    let signup = false;
</script>

<ion-app>
	{#if !logged}
    <ion-header translucent>
        <ion-toolbar>
            <ion-title>{signup ? "Sign up" : "Login"}</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-list lines="full">
        <ion-item>
            <ion-input placeholder="placeholder" type="text" />
        </ion-item>
        <ion-item>
            <ion-input placeholder="password" type="password" />
        </ion-item>
        {#if signup}
        {/if}
        <ion-button expand="block">Signup</ion-button>
        </ion-list>
        <ion-button  on:click="{() => signup = true }">{signup ? "Login instead" : "Sign up instead"}</ion-button>
    {:else}
    <App/>
    {/if}
</ion-app>

<style>

</style>
