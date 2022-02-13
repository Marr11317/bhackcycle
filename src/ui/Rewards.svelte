<script lang="ts">
  import { allRewards, loadedUser } from "./../app-state";
  import RewardCard from "./Rewards/RewardCard.svelte";
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Rewards</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-list-header>
      <h2>You have {$loadedUser?.credits}</h2>
      <ion-icon style="color: green; font-size: 32px; padding-left: 3px;" name="leaf-outline" />
    </ion-list-header>
    {#if $allRewards}
      {#each $allRewards as reward}
        <RewardCard {reward} />
      {/each}
    {/if}
  </ion-list>
</ion-content>
