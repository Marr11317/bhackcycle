<script lang="ts">
    export let trip: Trip;

    import { computeTripDistance } from "../app-state";
    import { iconNameForTransportType } from "./utilities";
</script>

<ion-item>
    <ion-icon
        name={iconNameForTransportType(trip.transportType)}
        slot="start"
    />
    <ion-label>
        {computeTripDistance(trip.geopoints)}
    </ion-label>
</ion-item>
