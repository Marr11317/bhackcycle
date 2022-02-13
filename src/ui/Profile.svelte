<script lang="ts">
    import PopoverExtra from "./PopoverExtra.svelte";
    import { IonicShowPopover } from "./IonicControllers";

    import auth from "../auth";
    import { loadedUser } from "../app-state";
    import Trip from "./Trip.svelte";

    function showPopover(event: Event) {
        IonicShowPopover(event, "popover-extra", PopoverExtra, {}).then(
            async (result: { data: string }) => {
                if (result.data == "logout") {
                    await auth.logout();
                }
            }
        );
    }
</script>

<ion-header translucent>
    <ion-toolbar>
        <ion-buttons slot="primary">
            <ion-button on:click={showPopover}>
                <ion-icon
                    slot="icon-only"
                    ios="ellipsis-horizontal"
                    md="ellipsis-vertical"
                />
            </ion-button>
        </ion-buttons>

        <ion-title>{$loadedUser ? $loadedUser.name : "Profile"}</ion-title>
    </ion-toolbar>
</ion-header>
<ion-content>
    <ion-list>
        {#if $loadedUser}
            <ion-list-header>
                <ion-label>Trips</ion-label>
            </ion-list-header>
            {#each $loadedUser.trips as trip (trip.id)}
                <Trip {trip} />
            {/each}
        {:else}
            <ion-item>
                <ion-label>Failed to load user</ion-label>
                <ion-button slot="end" fill="outline" on:click={() => auth.logout()} >
                    Go back to login page
                </ion-button>
            </ion-item>
        {/if}
    </ion-list>
</ion-content>
