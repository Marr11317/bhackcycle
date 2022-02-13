<script lang="ts">
    export let trip: Trip;

    import { computeTripDistance } from "../app-state";

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

<ion-item>
    <ion-icon
        name={iconNameForTransportType(trip.transportType)}
        slot="start"
    />
    <ion-label>
        {computeTripDistance(trip.geopoints)}
    </ion-label>
</ion-item>
