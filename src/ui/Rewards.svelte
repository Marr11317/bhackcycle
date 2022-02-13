<script>
  import { allRewards } from "./../app-state";
import RewardCard from "./Rewards/RewardCard.svelte";
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Rewards</ion-title>
  </ion-toolbar>
</ion-header>

<div>
  {#if $allRewards}
    {#each $allRewards as reward}
      <RewardCard reward={reward}/>
    {/each}
  {/if}
</div>
