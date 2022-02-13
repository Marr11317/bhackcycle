<script>
  import { allRewards } from "./../app-state";
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Rewards</ion-title>
  </ion-toolbar>
</ion-header>

<div>
  {#if $allRewards}
    {#each $allRewards as reward}
      <div style="border: solid 1px black;">
        <h3>{reward.name}</h3>
        <p>{reward.description}</p>
      </div>
    {/each}
  {/if}
</div>
