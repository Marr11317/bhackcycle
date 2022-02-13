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
      You have {$loadedUser?.credits} points to spend.
    </ion-list-header>
    {#if $allRewards}
      {#each $allRewards as reward}
        <RewardCard {reward} />
      {/each}
    {/if}
  </ion-list>
</ion-content>
