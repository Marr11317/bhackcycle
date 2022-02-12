<script lang="ts">
    import LoginScreen from "./LoginScreen.svelte";
    import App from "./App.svelte";

    import auth from "./auth";

    let logged = auth.isLoggedIn();
    let signup = false;
    let currentError = "";

    function validate(
        email: string,
        passwordInput: string,
        confirmPasswordInput: string,
        signup: boolean
    ): string {
        // TODO
        if (signup && (passwordInput !== confirmPasswordInput)) {
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
            if (await auth.login(email, password)) {
                logged = true;
            }
        }
    }
</script>

<ion-app>
    {#if !logged}
        <LoginScreen bind:error={currentError} bind:signup on:submit={submit} />
    {:else}
        <App />
    {/if}
</ion-app>

<style>
</style>
