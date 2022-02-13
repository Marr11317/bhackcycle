<script>
    import { loadedUser } from "../../app-state";

    export let reward;
    export let isRedeemed = false;
    let playerPoints = 100;

    loadedUser.subscribe((loadedUser) =>{
        if(loadedUser !== null){
            playerPoints = loadedUser.credits;
        }
    })
    function tryToRedeem(playerPoints) {
        if(!isRedeemed && reward.remainingUnits !== 0 && playerPoints >= reward.price){
            isRedeemed = true;
            loadedUser.update(loadedUser =>{
                loadedUser.credits -= reward.price;
                return loadedUser;
            });    
            reward.remainingUnits--;
        }

        console.log("clicked on reward");
    }
</script>

<ion-card on:click={() => tryToRedeem(playerPoints)}  class={isRedeemed ? "redeemed" : "notRedeemed"}>
    <ion-card-header>
        <ion-card-subtitle>expires on {reward.expiration} | {reward.remainingUnits} remaining units</ion-card-subtitle>
        <ion-card-title>{reward.name}</ion-card-title>
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
  