<script lang="ts">
    import PopoverExtra from "./PopoverExtra.svelte";
    import { IonicShowPopover } from "./IonicControllers";

    import auth from "../auth";
    import { computeTripDistance, loadedUser } from "../app-state";

    function showPopover(event: Event) {
        IonicShowPopover(event, "popover-extra", PopoverExtra, {}).then(
            async (result: { data: string }) => {
                if (result.data == "logout") {
                    await auth.logout();
                }
            }
        );
    }

    function iconNameForTransportType(transportType: string) {
        switch (transportType) {
            case "car":
                return "car";
            case "bicycle":
                return "bicycle";
            case "walk":
                return "walk";
            case "bus":
                return "bus";
            case "train":
                return "train";
            case "plane":
                return "plane";
            default:
                return "car";
        }
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

        <ion-title>{$loadedUser.name}</ion-title>
    </ion-toolbar>
</ion-header>
<ion-content>
    <ion-list>
        {#if $loadedUser}
            <ion-list-header>
                <ion-label>Trips</ion-label>
            </ion-list-header>
            {#each $loadedUser.trips as trip (trip.id)}
                <ion-item>
                    <ion-icon
                        name={iconNameForTransportType(trip.transportType)}
                        slot="start"
                    />
                    <ion-label>
                        {computeTripDistance(trip.geopoints)}
                    </ion-label>
                </ion-item>
            {/each}
        {:else}
            <ion-item>
                <ion-label>No user loaded</ion-label>
            </ion-item>
        {/if}
    </ion-list>
</ion-content>
