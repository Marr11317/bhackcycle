import type { Firestore, FirestoreDataConverter } from "firebase/firestore"

export const userConverter: FirestoreDataConverter<User> = {
  toFirestore: user => ({
    name: user.name,
    email: user.email,
    trips: user.trips,
    credits: user.credits
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return {
      name: data.name,
      email: data.email,
      trips: data.trips,
      credits: data.credits
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