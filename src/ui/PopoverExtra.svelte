<script>
    let overlayElement = document.querySelector("ion-popover");
    const closeOverlay = (data) => {
        overlayElement.dismiss(data);
    };
</script>

<ion-list>
    <ion-list-header>Ionic</ion-list-header>
    <ion-item
        button
        on:click={() => {
            closeOverlay("Learn Ionic");
        }}
    >
        Learn Ionic
    </ion-item>
    <ion-item
        button
        on:click={() => {
            closeOverlay("Documentation");
        }}
    >
        Documentation
    </ion-item>
    <ion-item
        button
        on:click={() => {
            closeOverlay("Showcase");
        }}
    >
        Showcase
    </ion-item>
    <ion-item
        button
        on:click={() => {
            closeOverlay("Github");
        }}
    >
        GitHub Repo
    </ion-item>
</ion-list>

<ion-button
    expand="block"
    on:click={() => {
        closeOverlay(undefined);
    }}
>
    Close
</ion-button>
