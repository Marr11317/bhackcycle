import type { FirestoreDataConverter } from "firebase/firestore"

export const userConverter: FirestoreDataConverter<DatabaseUser> = {
  toFirestore: user => ({
    name: user.name,
    email: user.email,
    credits: user.credits,
    redeemed_rewards: user.redeemedRewards

  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return {
      name: data.name,
      email: data.email,
      credits: data.credits,
      redeemedRewards: data.redeemed_rewards
    }
  }
}

// Firestore data converter
export const tripConverter: FirestoreDataConverter<Trip> = {
  toFirestore: trip => ({
    id: trip.id,
    userEmail: trip.userEmail,
    startTime: trip.startTime,
    endTime: trip.endTime,
    transportType: trip.transportType,
    distance: trip.distance,
    geopoints: trip.geopoints
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return {
      id: data.id,
      userEmail: data.user_email,
      startTime: data.start_time,
      endTime: data.end_time,
      transportType: data.transport_type,
      distance: data.distance,
      geopoints: data.geopoints
    }
  }
}

// Firestore data converter
export const rewardConverter: FirestoreDataConverter<Reward> = {
  toFirestore: reward => ({
    id: reward.id,
    name: reward.name,
    description: reward.description,
    price: reward.price,
    provider: reward.provider,
    expiration: reward.expiration,
    remainingUnits: reward.remainingUnits
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      provider: data.provider,
      expiration: data.expiration,
      remainingUnits: data.remaining_units
    }
  }
}