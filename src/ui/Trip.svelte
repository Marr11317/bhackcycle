<script lang="ts">
    export let trip: Trip;
    export let editable = false;
    let nodeRef;
    import { computeTripDistance } from "../app-state";
    import database from './../database';
    function deleteTrip(){
        console.log("deleted");
        database.deleteTrip(trip.id);
    }
    import { iconNameForTransportType } from "./utilities";
</script>

<ion-item bind:this={nodeRef}>
    <ion-icon
        name={iconNameForTransportType(trip.transportType)}
        slot="start"
    />
    <ion-label>
        {computeTripDistance(trip.geopoints)}
    </ion-label>

    <ion-button hidden={!editable} on:click={() => {
        deleteTrip();
        nodeRef.parentNode.removeChild(nodeRef);}}>Delete</ion-button>
</ion-item>
