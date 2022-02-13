<script lang="ts">
    import PopoverExtra from "./PopoverExtra.svelte";
    import { IonicShowPopover } from "./IonicControllers";

    import auth from "../auth";

    function showPopover(event: Event) {
        IonicShowPopover(event, "popover-extra", PopoverExtra, {
            firstName: "Douglas",
            lastName: "Adams",
            middleInitial: "N",
        }).then(async (result: { data: string }) => {
            if (result.data == "logout") {
                await auth.logout();
            }
        });
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

        <ion-title>Profile</ion-title>
    </ion-toolbar>
</ion-header>
