<script lang="ts">
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
    }

    function hasRedeemedBefore(){
        return $loadedUser.redeemedRewards.findIndex((redeemed) => redeemed.id === reward.id) !== -1;
    }
</script>

<ion-card on:click={() => tryToRedeem()}  class={rewardRedeemed ? "redeemed" : "notRedeemed"}>
    <ion-card-header>
        <ion-card-title>{reward.name}</ion-card-title>
        <ion-card-subtitle class="sub">
            {reward.description}
        </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content class="content">
        Cost: {reward.price} credits.
        <br />
        {reward.expiration
            ? `Expires on ${reward.expiration.toDateString()}`
            : ""}
    </ion-card-content>
</ion-card>

<style>
    ion-card {
        color: aliceblue;
        visibility: visible;
    }
    .redeemed {
        background-color: beige;
    }
    .notRedeemed {
        background-color: #c3e4f1;
    }

    .sub {
        font-size: 1rem;
        color: gray;
    }

    .content {
        color: gray;
    }
</style>
