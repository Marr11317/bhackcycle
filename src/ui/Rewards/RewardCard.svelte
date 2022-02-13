<script>
    export let reward;
    export let isRedeemed = false;
    export let playerPoints = 100;

    function tryToRedeem(playerPoints) {
        if(playerPoints >= reward.price){
            playerPoints -= reward.price;
            isRedeemed = !isRedeemed;
        }
        console.log("clicked on reward");
    }
</script>

<ion-card on:click={() => tryToRedeem(playerPoints)}  class={isRedeemed ? "redeemed" : "notRedeemed"}>
    <ion-card-header>
        <ion-card-subtitle>expires on {reward.expiration} | {reward.remainingUnits} remaining units</ion-card-subtitle>
        <ion-card-title>{reward.providerName}</ion-card-title>
    </ion-card-header>
  
    <ion-card-content>
      {reward.description}
    </ion-card-content>

    <ion-card-content>
        price: {reward.price} active points
    </ion-card-content>
    
</ion-card>
<style>
    ion-card {
        color: aliceblue;
        visibility: visible;
    }
    .redeemed{
        background-color: lightgreen;
    }
    .notRedeemed{
        background-color: skyblue;
    }
</style>
  