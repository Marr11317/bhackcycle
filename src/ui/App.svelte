<script lang="ts">
  import { loadedUser } from "./../app-state";

  import { onMount } from "svelte";
  import auth from "./../auth";
  import database from "./../database";
  import Map from "./Map.svelte";

  onMount(async () => {
    const result = await database.fetchUser(auth.getCurrentUser()!);
    loadedUser.set(result);
  });
</script>

<ion-app>
  <ion-tabs>
    <ion-tab tab="map">
      <div>{$loadedUser?.name} ({$loadedUser?.email})  |   {$loadedUser?.credits} credits</div>
      <Map />
    </ion-tab>
    <ion-tab tab="log">
      <h1 class="ma">Log Content</h1>
    </ion-tab>
    <ion-tab tab="settings">
      <h1 class="ma">Settings Content</h1>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="map">
        <ion-label>Map</ion-label>
        <ion-icon name="bicycle-outline" />
      </ion-tab-button>
      <ion-tab-button tab="log">
        <ion-label>Log</ion-label>
        <ion-icon name="analytics-outline" />
      </ion-tab-button>
      <ion-tab-button tab="settings">
        <ion-label>Settings</ion-label>
        <ion-icon name="settings-outline" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>

<style>
  .ma {
    margin: auto;
  }
</style>
