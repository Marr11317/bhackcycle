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
        return {
                name: data.name,
                email: data.email,
                trips: data.trips,
                credits: data.credits,
                redeemedRewards: data.redeemed_rewards
            };
    }
};

// Firestore data converter
export const tripConverter = {
    toFirestore: (trip) => {
        return {
            id: trip.id,
            userEmail: trip.user_email,
            startTime: trip.start_time,
            endTime: trip.end_time,
            transportType: trip.transport_type,
            distance: trip.distance,
            geopoints: trip.geopoints
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
    return {id: data.id,
            userEmail: data.user_email,
            startTime: data.start_time,
            endTime: data.end_time,
            transportType: data.transport_type,
            distance: data.distance,
            geopoints: data.geopoints};
    }
};

// Firestore data converter
export const rewardConverter = {
    toFirestore: (reward) => {
        return {
            id: reward.id,
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
        return {id: data.id,
                name: data.name,
                description: data.description,
                price: data.price,
                provider: data.provider,
                expiration: data.expiration,
                remainingUnits: data.remaining_units};
    }
};