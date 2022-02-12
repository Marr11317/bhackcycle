<script lang="ts">
    export let signup = false;
</script>

<ion-header translucent>
    <ion-toolbar>
        <ion-title>{signup ? "Sign up" : "Login"}</ion-title>
    </ion-toolbar>
</ion-header>
<ion-list lines="full">
    <ion-item>
        <ion-input placeholder="email" type="text" />
    </ion-item>
    <ion-item>
        <ion-input placeholder="password" type="password" />
    </ion-item>
    {#if signup}
        <ion-item>
            <ion-input placeholder="confirm password" type="password" />
        </ion-item>
    {/if}
    <ion-button expand="block">{signup ? "Sign up" : "Login"}</ion-button>
</ion-list>
<ion-button on:click={() => (signup = !signup)}>
    {signup ? "Login instead" : "Sign up instead"}
</ion-button>
