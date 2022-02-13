<script lang="ts">
    import { loadedUser } from "../../app-state";

    export let reward: Reward;
    export let isRedeemed = false;

    function tryToRedeem() {
        if (
            !isRedeemed ||
            !reward.remainingUnits ||
            $loadedUser!.credits < reward.price
        )
            return;

        isRedeemed = true;
        if ($loadedUser) {
            $loadedUser.credits -= reward.price;
            reward.remainingUnits--;
        }
    }

    isRedeemed = true;
    loadedUser.update((user) => {
        if (!user) {
            return null;
        }
        user.credits -= reward.price;
        return user;
    });
</script>

<ion-card
    on:click={tryToRedeem}
    class={isRedeemed ? "redeemed" : "notRedeemed"}
>
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
