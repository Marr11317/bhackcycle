// Firestore data converter
export const userConverter = {
    toFirestore: (user) => {
        return {
            name: user.name,
            email: user.email,
            trips: user.trips,
            credits: user.credits
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return {name: data.name,
                email: data.email,
                trips: data.trips,
                credits: data.credits};
    }
};

// Firestore data converter
export const rewardConverter = {
    toFirestore: (reward) => {
        return {
            name: reward.name,
            description: reward.description,
            price: reward.price,
            provider: reward.provider,
            expiration: reward.expiration,
            remainingUnits: reward.remaining_units
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return {name: data.name,
                description: data.description,
                price: data.price,
                provider: data.provider,
                expiration: data.expiration,
                remainingUnits: data.remaining_units};
    }
};