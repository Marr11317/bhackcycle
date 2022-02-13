<script lang="ts">
    let overlayElement = document.querySelector("ion-popover");
    const closeOverlay = (data: string) => {
        overlayElement?.dismiss(data);
    };
</script>

<ion-list lines="n">
    <ion-item
        button
        on:click={() => {
            closeOverlay("logout");
        }}
    >
        Logout
        <ion-icon name="log-out-outline" slot="end" />
    </ion-item>
    <ion-item
        button
        on:click={() => {
            closeOverlay("about");
        }}
    >
        about
        <ion-icon name="information-circle-outline" slot="end" />
    </ion-item>
    <ion-item
        lines="none"
        button
        on:click={() => {
            closeOverlay("github");
        }}
    >
        GitHub Repo
        <ion-icon name="logo-github" slot="end" />
    </ion-item>
</ion-list>
