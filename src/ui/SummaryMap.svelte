<script lang="ts">
    export let trip: Trip;

    import "../../node_modules/leaflet/dist/leaflet.css";

    import L from "leaflet";
    import { onMount } from "svelte";
    import { averagePosition } from "../app-state";

    let carte: L.Map | null = null;
    let trajetActuel: L.Polyline | null = null;
    let circleStartMarker: L.CircleMarker | null = null;
    let circleEndMarker: L.CircleMarker | null = null;
    let isInitialized = false;

    const createMap = (container: HTMLElement) => {
        carte = L.map(container, { preferCanvas: true });
        L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            {
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 20,
                minZoom: 1,
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
                accessToken:
                    "pk.eyJ1IjoicmVkNWg0ZDB3IiwiYSI6ImNrems4bzhzMzRrcG4yeHByYTgwN2draHcifQ.356a0A2cfoy3zrhq-IW_rA",
            }
        ).addTo(carte);
        L.control.scale().addTo(carte);
        carte.setView([45.504755, -73.612572], 14); // Montreal
        return {
            destroy: () => {
                carte?.remove();
                carte = null;
            },
        };
    };

    const resizeMap = () => carte?.invalidateSize();

    const drawTrip = () => {
        if (!carte) {
            return;
        }

        const pointList = trip.geopoints
            .sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1))
            .map<[number, number]>((x) => [
                x.location.latitude,
                x.location.longitude,
            ]);

        circleStartMarker = L.circleMarker(pointList[0], {
            color: "red",
            weight: 2,
            opacity: 0.7,
        });
        circleEndMarker = L.circleMarker(pointList[pointList.length - 1], {
            color: "red",
            weight: 2,
            opacity: 0.7,
        });
        trajetActuel = L.polyline(pointList, {
            color: "red",
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1,
        });

        circleStartMarker.addTo(carte);
        circleEndMarker.addTo(carte);
        trajetActuel.addTo(carte);
    };

    onMount(() => {
        setTimeout(() => {
            const center = averagePosition(trip);
            carte?.setView([center.latitude, center.longitude]);
            drawTrip();
            resizeMap();
            isInitialized = true;
        }, 300);
    });
</script>

<svelte:window on:resize={resizeMap} />

{#if !isInitialized}
    <div class="loading">
        <div>Loading...</div>
    </div>
{/if}
<div class="map" use:createMap />

<style>
    .map :global(.marker-text) {
        width: 100%;
        text-align: center;
        font-weight: 600;
        background-color: #444;
        color: #eee;
        border-radius: 0.5rem;
    }

    .map :global(.map-marker) {
        width: 30px;
        transform: translateX(-50%) translateY(-25%);
    }

    .map {
        height: 100%;
        width: 100%;
    }

    .loading {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10000;
        background-color: white;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
