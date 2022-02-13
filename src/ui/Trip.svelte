<script lang="ts">
    export let trip: Trip;
    export let editable = false;
    let nodeRef: HTMLElement;

    import { computeTripDistance } from "../app-state";
    import { IonicShowModal } from "./IonicControllers";
    import SummaryMap from "./SummaryMap.svelte";
    import database from './../database';
    function deleteTrip() {
        database.deleteTrip(trip.id);
    }
    import { iconNameForTransportType } from "./utilities";

    function viewTrip(event: Event) {
        IonicShowModal("summary-map", SummaryMap, {'trip': trip});
    }
</script>


<ion-item bind:this={nodeRef}>
    <ion-icon
        name={iconNameForTransportType(trip.transportType)}
        slot="start"
    />
    <ion-label on:click={viewTrip}>
        {computeTripDistance(trip.geopoints)}
    </ion-label>

    <ion-button hidden={!editable} on:click={() => {
        deleteTrip();
        nodeRef?.parentNode?.removeChild(nodeRef);}}>Delete</ion-button>
</ion-item>
