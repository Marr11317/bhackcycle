<script lang="ts">
  import { allRewards, loadedUser } from "./../app-state";
  import RewardCard from "./Rewards/RewardCard.svelte";

  let playerPoints: number;
  loadedUser.subscribe((loadedUser) =>{
      if(loadedUser !== null){
          playerPoints = loadedUser.credits;
      }
    })
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Rewards</ion-title>
    <ion-subtitle>You have {$loadedUser?.credits} points to spend.</ion-subtitle
    >
  </ion-toolbar>
</ion-header>

<ion-content>
  {#if $allRewards}
    {#each $allRewards as reward}
      <RewardCard {reward} />
    {/each}
  {/if}
</ion-content>
