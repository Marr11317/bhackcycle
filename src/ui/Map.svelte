<script lang="ts">
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
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoicmVkNWg0ZDB3IiwiYSI6ImNrems4bzhzMzRrcG4yeHByYTgwN2draHcifQ.356a0A2cfoy3zrhq-IW_rA",
      }
    ).addTo(carte);
    carte.setView([45.508888, -73.561668], 14);
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

  const stopTrip = () => {
    if (!$currentTrip) {
      return;
    }

    const trip: Trip = {
      id: $currentTrip.id,
      userEmail: $currentTrip.userEmail,
      transportType: $currentTrip.transportType,
      startTime: new Date($currentTrip.startTime),
      endTime: new Date(),
      distance: computeTripDistance(
        $currentTrip.geopoints.map((x) => x.location)
      ),

      geopoints: $currentTrip.geopoints.map(({ location, timestamp }) => ({
        location,
        timestamp: new Date(timestamp),
      })),
    };

    database.updateTrip(trip);
    currentTrip.set(null);

    if (carte) {
      trajetActuel?.removeFrom(carte);
      circleMarker?.removeFrom(carte);
    }
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
  };

  onMount(() => {
    setInterval(async () => {
      const currentPosition = await getCurrentPosition();
      if (!$currentTrip) {
        return;
      }
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

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""
  />
</svelte:head>

<div class="map" style="height:100%;width:100%;" use:createMap>
  {#if $currentTrip}
    <div class="leaflet-bottom">
      <ion-fab-button on:click={stopTrip} style="pointer-events: auto;">
        <ion-icon name="close" />
      </ion-fab-button>
    </div>
  {:else}
    <div class="leaflet-bottom">
      <ion-fab-button on:click={startTrip} style="pointer-events: auto;">
        <ion-icon name="add" />
      </ion-fab-button>
    </div>
  {/if}
</div>

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
