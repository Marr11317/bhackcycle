<script lang="ts">
    export let trip: Trip;

    import { computeTripDistance } from "../app-state";

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
