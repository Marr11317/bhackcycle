<script lang="ts">
    import { loadedUser } from "../../app-state";

    export let reward: Reward;
    let rewardRedeemed =
        $loadedUser?.redeemedRewards.findIndex(
            (redeemed) => redeemed.id === reward.id
        ) !== -1;

    function tryToRedeem() {
        if (
            !$loadedUser ||
            hasRedeemedBefore() ||
            !reward.remainingUnits ||
            $loadedUser.credits < reward.price
        )
            return;
        loadedUser.update((user) => {
            if (!user) return user;
            rewardRedeemed = true;
            user.credits -= reward.price;
            user.redeemedRewards = [...user.redeemedRewards, reward];
            return user;
        });
        reward.remainingUnits--;
    }

    function hasRedeemedBefore() {
        return (
            $loadedUser?.redeemedRewards.findIndex(
                (redeemed) => redeemed.id === reward.id
            ) !== -1
        );
    }
</script>

<ion-card
    on:click={() => tryToRedeem()}
    class={rewardRedeemed ? "redeemed" : "notRedeemed"}
>
    <ion-card-header>
        <ion-card-title>{reward.name}</ion-card-title>
        <ion-card-subtitle class="sub">
            {reward.description}
        </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content class="content">
        Cost: {reward.price}
        <ion-icon
            style="color: green; font-size: 16px; padding-left: 3px;"
            name="leaf-outline"
        />
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
