<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function submit() {
        if (!emailInput || !passwordInput) return;
        if (signup && !confirmPasswordInput) return;

        dispatch("submit", {
            name: nameInput ? nameInput.value : undefined,
            email: emailInput.value,
            password: passwordInput.value,
            confirmPassword: confirmPasswordInput
                ? confirmPasswordInput.value
                : undefined,
            signup: signup,
        });
    }
    export let signup = false;
    export let errorNote = "";

    let nameInput: any, emailInput: any, passwordInput: any, confirmPasswordInput: any;

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key === "Enter") {
            submit();
        }
    }
</script>

<ion-header translucent>
    <ion-toolbar>
        <ion-title>{signup ? "Sign up" : "Login"}</ion-title>
    </ion-toolbar>
</ion-header>

<ion-icon style="position: fixed; left: calc(50% - 64px); margin-right: auto; top: 15%; font-size: 128px; color: lightgray;" name="bicycle"></ion-icon>

<ion-list lines="full">
    {#if errorNote !== ""}
        <ion-item>
            <ion-label>{errorNote}</ion-label>
        </ion-item>
    {/if}
    {#if signup}
        <ion-item>
            <ion-input
                bind:this={nameInput}
                placeholder="Full Name"
                type="text"
                required
            />
        </ion-item>
    {/if}
    <ion-item>
        <ion-input
            bind:this={emailInput}
            placeholder="email"
            type="text"
            required
            autofocus
        />
    </ion-item>
    <ion-item>
        <ion-input
            bind:this={passwordInput}
            placeholder="password"
            type="password"
            required
            on:keypress={!signup ? handleKeyPress : undefined}
        />
    </ion-item>
    {#if signup}
        <ion-item>
            <ion-input
                bind:this={confirmPasswordInput}
                placeholder="confirm password"
                type="password"
                required
                on:keypress={handleKeyPress}
            />
        </ion-item>
    {/if}
    <ion-button on:click={submit} expand="block">
        {signup ? "Sign up" : "Login"}
    </ion-button>
</ion-list>
<ion-button on:click={() => (signup = !signup)}>
    {signup ? "Login instead" : "Sign up instead"}
</ion-button>
