<script lang="ts">
    import LoginScreen from "./LoginScreen.svelte";
    import App from "./App.svelte";

    import auth from "./auth";

    let logged = auth.isLoggedIn();
    let signup = false;
</script>

<ion-app>
    {#if !logged}
        <LoginScreen bind:signup/>
    {:else}
        <App />
    {/if}
</ion-app>

<style>
</style>
