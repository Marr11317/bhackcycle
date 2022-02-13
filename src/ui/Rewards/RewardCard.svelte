<script>
    import { loadedUser } from "../../app-state";

    export let reward;
    let rewardRedeemed = $loadedUser.redeemedRewards.findIndex((redeemed) => redeemed.id === reward.id) !== -1;

    function tryToRedeem() {
        if(!hasRedeemedBefore() && reward.remainingUnits !== 0 && $loadedUser.credits >= reward.price){
            loadedUser.update(loadedUser =>{
                rewardRedeemed = true;
                loadedUser.credits -= reward.price;
                loadedUser.redeemedRewards = [...loadedUser.redeemedRewards, reward];
                return loadedUser;
            });    
            reward.remainingUnits--;
        }

        console.log("clicked on reward");
    }

    function hasRedeemedBefore(){
        return $loadedUser.redeemedRewards.findIndex((redeemed) => redeemed.id === reward.id) !== -1;
    }
</script>

<ion-card on:click={() => tryToRedeem()}  class={rewardRedeemed ? "redeemed" : "notRedeemed"}>
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
  