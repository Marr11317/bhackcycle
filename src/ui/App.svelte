<script lang="ts">
  import Map from "./Map.svelte";
  import Rewards from "./Rewards.svelte";
  import { onMount } from "svelte";

  import auth from "./../auth";
  import database from "./../database";
  import { allRewards, loadedUser } from "./../app-state";

  onMount(async () => {
    const result = await database.fetchUser(auth.getCurrentUser()!);
    loadedUser.set(result);

    const result2 = await database.fetchAllRewards()
    allRewards.set(result2)
  });
</script>

<ion-app>
  <ion-tabs>
    <ion-tab tab="map">
      <div>
        {$loadedUser?.name} ({$loadedUser?.email}) | {$loadedUser?.credits}
        credits
      </div>
      <Map />
    </ion-tab>
    <ion-tab tab="rewards">
      <ion-content>
        <Rewards />
      </ion-content>
    </ion-tab>
    <!-- <ion-tab tab="settings">
			<h1 class="ma">Settings Content</h1>
		</ion-tab> -->

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="map">
        <ion-label>Map</ion-label>
        <ion-icon name="bicycle-outline" />
      </ion-tab-button>
      <ion-tab-button tab="rewards">
        <ion-label>Rewards</ion-label>
        <ion-icon name="analytics-outline" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
