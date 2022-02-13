<script lang="ts">
    import PopoverExtra from "./PopoverExtra.svelte";
    import { IonicShowPopover } from "./IonicControllers";

    function showPopover(event: Event) {
        console.log("here");
        IonicShowPopover(event, "popover-extra", PopoverExtra, {
            firstName: "Douglas",
            lastName: "Adams",
            middleInitial: "N",
        }).then(console.log);
    };
</script>

<ion-header translucent>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button auto-hide="false" />
        </ion-buttons>
        <ion-buttons slot="primary">
            <ion-button on:click={showPopover}>
                <ion-icon
                    slot="icon-only"
                    ios="ellipsis-horizontal"
                    md="ellipsis-vertical"
                />
            </ion-button>
        </ion-buttons>

        <ion-title>Dashboard</ion-title>
    </ion-toolbar>
</ion-header>

<h1 class="ma">Dashboard Content</h1>
