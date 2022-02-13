<script lang="ts">
    import PopoverExtra from "./PopoverExtra.svelte";
    import { IonicShowPopover } from "./IonicControllers";

    import auth from "../auth";
    import { loadedUser } from "../app-state";
    import Trip from "./Trip.svelte";
    let isEditable = false;
    import { Browser } from "@capacitor/browser";

    function showPopover(event: Event) {
        IonicShowPopover(event, "popover-extra", PopoverExtra, {}).then(
            async (result: { data: string }) => {
                switch (result.data) {
                    case "logout":
                        await auth.logout();
                        break;
                    case "github":
                        await Browser.open({
                            url: "http://github.com/marr11317/bhackcycle",
                        });
                    default:
                        break;
                }
            }
        );
    }

    function toggleEditable(){
        isEditable = !isEditable;
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
    <div class="summary-map"></div>
    <ion-list>
        {#if $loadedUser}
            <ion-list-header>
                <ion-label>Trips</ion-label>
                <ion-button on:click={() => toggleEditable()}>Edit</ion-button>
            </ion-list-header>

            {#each $loadedUser.trips as trip (trip.id)}
                <Trip editable={isEditable} {trip} />
            {/each}
            {#if !$loadedUser.trips.length}
            <ion-item lines="none">
                <ion-label color="medium">You don't have any trips yets</ion-label>
            </ion-item>
            {/if}
        {:else}
            <ion-item>
                <ion-label>Failed to load user</ion-label>
                <ion-button
                    slot="end"
                    fill="outline"
                    on:click={() => auth.logout()}
                >
                    Go back to login page
                </ion-button>
            </ion-item>
        {/if}
    </ion-list>
</ion-content>
