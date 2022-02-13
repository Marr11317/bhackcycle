<script lang="ts">
    export let trip: Trip;
    let nodeRef;
    import { computeTripDistance } from "../app-state";
    import database from './../database';
    function iconNameForTransportType(transportType: string) {
        switch (transportType) {
            case "bicycle":
                return "bicycle";
            case "walk":
                return "walk";
            case "public_transport":
                return "bus";
            default:
                return "walk";
        }
    }
    function deleteTrip(){
        console.log("deleted");
        database.deleteTrip(trip.id);
    }
</script>

<ion-item bind:this={nodeRef}>
    <ion-icon
        name={iconNameForTransportType(trip.transportType)}
        slot="start"
    />
    <ion-label>
        {computeTripDistance(trip.geopoints)}
    </ion-label>

    <ion-button on:click={() => {
        deleteTrip();
        nodeRef.parentNode.removeChild(nodeRef);}}>Delete</ion-button>
</ion-item>
