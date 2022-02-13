<script lang="ts">
  export let trip: Trip;
  export let editable = false;
  let nodeRef: HTMLElement;

  import { computeTripDistance } from "../app-state";
  import SummaryMap from "./SummaryMap.svelte";
  import database from "./../database";
  function deleteTrip() {
    database.deleteTrip(trip.id);
  }
  import {
    englishNameForTripType,
    iconNameForTransportType,
  } from "./utilities";

  let showTrip = false;
  const showModal = () => (showTrip = true);
  const dismissModal = () => (showTrip = false);

  let distanceString =
    trip.distance >= 1000
      ? `${Math.floor(trip.distance / 1000)} km`
      : `${Math.ceil(trip.distance)} m`;
</script>

<ion-item bind:this={nodeRef}>
  <ion-icon name={iconNameForTransportType(trip.transportType)} slot="start" />
  <ion-label on:click={showModal}>
    {computeTripDistance(trip.geopoints).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    }) + " m"}
  </ion-label>

  <ion-button
    hidden={!editable}
    on:click={() => {
      deleteTrip();
      nodeRef?.parentNode?.removeChild(nodeRef);
    }}>Delete</ion-button
  >
</ion-item>
<ion-modal is-open={showTrip} on:didDismiss={dismissModal}>
  {#if showTrip}
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button on:click={dismissModal}>
            <ion-icon
              slot="icon-only"
              ios="arrow-back-outline"
              md="arrow-back-outline"
            />
          </ion-button>
        </ion-buttons>

        <ion-title style="padding-inline: 0;">
          {distanceString}
          {' '}
          {englishNameForTripType(trip.transportType)}
        </ion-title>
        <ion-subtitle>
          <ion-icon name={iconNameForTransportType(trip.transportType)} />
          {trip.startTime.toDateString()}</ion-subtitle
        >
      </ion-toolbar>
    </ion-header>
    <SummaryMap {trip} />
  {/if}
</ion-modal>
