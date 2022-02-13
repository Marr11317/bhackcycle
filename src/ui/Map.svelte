<script lang="ts">
  import "../../node_modules/leaflet/dist/leaflet.css";

  import L, { type LatLngLiteral, type LatLngTuple } from "leaflet";
  import { onMount } from "svelte";
  import { Geolocation } from "@capacitor/geolocation";
  import {
    addTripEndpoint,
    computeTripDistance,
    currentTrip,
    loadedUser,
  } from "../app-state";
  import database from "./../database";

  let carte: L.Map | null = null;
  let trajetActuel: L.Polyline | null = null;
  let circleMarker: L.CircleMarker | null = null;

  const getCurrentPosition = async (): Promise<LatLngLiteral> => {
    const result = await Geolocation.getCurrentPosition();
    return {
      lat: result.coords.latitude,
      lng: result.coords.longitude,
    };
  };

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
    carte.setView([45.504755, -73.612572], 14); // Montreal
    return {
      destroy: () => {
        carte?.remove();
        carte = null;
      },
    };
  };

  const resizeMap = () => carte?.invalidateSize();

  const initCurrentTrip = async (currentPosition: LatLngLiteral) => {
    if (!carte) {
      return;
    }

    circleMarker?.removeFrom(carte);
    trajetActuel?.removeFrom(carte);

    circleMarker = L.circleMarker(currentPosition, {
      color: "red",
      weight: 2,
      opacity: 0.7,
    });
    trajetActuel = L.polyline([currentPosition], {
      color: "red",
      weight: 3,
      opacity: 0.5,
      smoothFactor: 1,
    });

    circleMarker.addTo(carte);
    trajetActuel.addTo(carte);
  };

  const drawCurrentTrip = () => {
    if (!carte || !$currentTrip?.geopoints.length) {
      return;
    }

    const pointList = $currentTrip.geopoints
      .sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1))
      .map<[number, number]>((x) => [
        x.location.latitude,
        x.location.longitude,
      ]);

    circleMarker = L.circleMarker(pointList[pointList.length - 1], {
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

    circleMarker.addTo(carte);
    trajetActuel.addTo(carte);
  };

  let recordId: number | null = null;
  const stopTrip = () => {
    if (recordId) {
      clearInterval(recordId);
      recordId = null;
    }

    if (!$currentTrip)
      return;

    const distance = computeTripDistance($currentTrip.geopoints);

    const trip: Trip = {
      id: $currentTrip.id,
      userEmail: $currentTrip.userEmail,
      transportType: $currentTrip.transportType,
      startTime: new Date($currentTrip.startTime),
      endTime: new Date(),
      distance: distance,

      geopoints: $currentTrip.geopoints.map(({ location, timestamp }) => ({
        location,
        timestamp: timestamp,
      })),
    };

    database.updateTrip(trip);
    currentTrip.set(null);

    if (carte) {
      trajetActuel?.removeFrom(carte);
      circleMarker?.removeFrom(carte);
    }

    loadedUser.update((user) => {
      if (!user) {
        return null;
      }
      user.credits += Math.floor((5 * distance) / 1000);
      return user;
    });
  };

  const startTrip = async () => {
    currentTrip.set({
      id: Date.now().toString(),
      userEmail: $loadedUser!.email,
      startTime: new Date().toISOString(),
      transportType: "velo",
      geopoints: [],
    });

    const currentPosition = await getCurrentPosition();
    initCurrentTrip(currentPosition);

    recordId = window.setInterval(async () => {
      if (!$currentTrip)
        return;

      const currentPosition = await getCurrentPosition();
      addTripEndpoint({
        latitude: currentPosition.lat,
        longitude: currentPosition.lng,
      });

      if ($currentTrip.geopoints.length == 0) {
        initCurrentTrip(currentPosition);
      } else {
        trajetActuel?.addLatLng(currentPosition);
      }
    }, 3000);
  };

  onMount(() => {
    setTimeout(async () => {
      const currentPosition = await getCurrentPosition();
      carte?.setView(currentPosition);
      if ($currentTrip?.geopoints.length) {
        drawCurrentTrip();
      }
      resizeMap();
    }, 300);
  });
</script>

<svelte:window on:resize={resizeMap} />

<ion-content fullscreen>
  <ion-fab
    horizontal="center"
    vertical="bottom"
    slot="fixed"
    on:click={$currentTrip ? stopTrip : startTrip}
    style="pointer-events: auto;"
  >
    <ion-fab-button>
      <ion-icon name={$currentTrip ? "close" : "add"} />
    </ion-fab-button>
  </ion-fab>

  <div class="map" style="height: 100%; width: 100%;" use:createMap />
</ion-content>

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
</style>
