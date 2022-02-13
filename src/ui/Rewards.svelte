<script>
  import { allRewards } from "./../app-state";
  import RewardCard from "./Rewards/RewardCard.svelte";
  import { loadedUser } from "../app-state";
  let playerPoints;
  loadedUser.subscribe((loadedUser) =>{
      if(loadedUser !== null){
          playerPoints = loadedUser.credits;
      }
    })
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Rewards</ion-title>
    <ion-subtitle>You have {playerPoints} points to spend.</ion-subtitle>
  </ion-toolbar>
</ion-header>

<div>
  {#if $allRewards}
    {#each $allRewards as reward}
      <RewardCard reward={reward}/>
    {/each}
  {/if}
</div>
