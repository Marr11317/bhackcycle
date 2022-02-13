<script lang="ts">
  import Map from "./Map.svelte";
  import Rewards from "./Rewards.svelte";
  import Profile from "./Profile.svelte";
  import { onMount } from "svelte";

  import auth from "./../auth";
  import database from "./../database";
  import { allRewards, loadedUser } from "./../app-state";

  onMount(async () => {
    const result = await database.fetchUser(auth.getCurrentUser()!);
    $loadedUser = result;

    const result2 = await database.fetchAllRewards();
    result2.sort((a, b) => a.id < b.id ? -1 : 1)
    $allRewards = result2;
  });

  loadedUser.subscribe(async (user) => {
    if (user) await database.updateUser(user);
  });

  // database.updateReward({
  //   id: "one",
  //   name: "10% Discount road bike",
  //   description:
  //     "Engineered to climb, corner and descend with efficiency and speed, a Giant road bike gives you a competitive edge. Whether you’re racing, training or going for the KOM, these road bikes do it all, and do it faster.",
  //   price: 100,
  //   provider: {} as any,
  //   expiration: new Date(),
  //   remainingUnits: null,
  // });

  // database.updateReward({
  //   id: "two",
  //   name: "Zamberlan 900 Rolle Evo 2 Gore-Tex Hiking Boots - Women's",
  //   description:
  //     "From the West Coast Trail to the Sentier du Fjord Trail to the Camino de Santiago, these boots keep your feet protected and supported where ever your hike or trek. Flex panels and a lowered back lock your foot in while allowing for a natural flex.",
  //   price: 1000,
  //   provider: {} as any,
  //   expiration: new Date(),
  //   remainingUnits: 7,
  // });

  // database.updateReward({
  //   id: "three",
  //   name: "Carte cadeau Renaud-Bray 20$",
  //   description:
  //     "Livres, romans, documentaires, films, et bien plus. Renaud-Bray est avant tou un lieu convivial de rencontres, d’échanges et de découvertes.",
  //   price: 35,
  //   provider: {} as any,
  //   expiration: new Date(),
  //   remainingUnits: null,
  // });

  // database.updateReward({
  //   id: "four",
  //   name: "Billets de concert Jacob Collier",
  //   description:
  //     "Concert au sein du Pré-Festival de Jazz de Mourréal, le 11 mai 2022 à la Place des Arts.",
  //   price: 5000,
  //   provider: {} as any,
  //   expiration: new Date(),
  //   remainingUnits: null,
  // });
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
        <ion-label>Profile</ion-label>
        <ion-icon name="analytics-outline" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
