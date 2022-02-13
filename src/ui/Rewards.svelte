<script>
  import { allRewards } from "./../app-state";
  import RewardCard from "./Rewards/RewardCard.svelte";
  import { loadedUser } from "../app-state";
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Rewards</ion-title>
    <ion-subtitle>You have {$loadedUser?.credits} points to spend.</ion-subtitle
    >
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  {#if $allRewards}
    {#each $allRewards as reward}
      <RewardCard {reward} />
    {/each}
  {/if}
</ion-content>
