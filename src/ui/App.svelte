<script lang="ts">
  import Map from "./Map.svelte";
  import Rewards from "./Rewards.svelte";
  import Profile from "./Profile.svelte";
  import { onMount } from "svelte";

  import auth from "./../auth";
  import database from "./../database";
  import { allRewards, loadedUser } from "./../app-state";

  let credits = 0;
  onMount(async () => {
    const result = await database.fetchUser(auth.getCurrentUser()!);
    $loadedUser = result;

    const result2 = await database.fetchAllRewards();
    $allRewards = result2;

    $loadedUser.trips.push({
      id: "1",
      userEmail: $loadedUser.email,
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
      transportType: "bus",
      distance: 10000,
      geopoints: [
        {
          location: {
            latitude: 1,
            longitude: 1,
          },
          timestamp: new Date(),
        },
        {
          location: {
            latitude: 2,
            longitude: 2,
          },
          timestamp: new Date(),
        },
      ],
    });
    $loadedUser = $loadedUser;
  });

  loadedUser.subscribe(async (loadedUser) => {
    if(loadedUser !== null){
      console.log("loaded user updated " + credits);
      credits = loadedUser.credits;
      await database.updateUser(loadedUser);
    }
  });


</script>

<ion-app>
  <ion-tabs>
    <ion-tab tab="map">
      <Map />
    </ion-tab>
    <ion-tab tab="rewards">
      <Rewards />
    </ion-tab>
    <ion-tab tab="profile">
      <Profile />
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
        <ion-icon name="trophy-outline" />
      </ion-tab-button>
      <ion-tab-button tab="profile">
        <ion-label>profile</ion-label>
        <ion-icon name="analytics-outline" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
