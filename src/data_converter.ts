import { Timestamp } from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"

export const userConverter: FirestoreDataConverter<DatabaseUser> = {
  toFirestore: user => ({
    name: user.name,
    email: user.email,
    credits: user.credits,
    redeemedRewards: user.redeemedRewards
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return {
      name: data.name,
      email: data.email,
      credits: data.credits,
      redeemedRewards: data.redeemedRewards
    }
  }
}

// Firestore data converter
export const tripConverter: FirestoreDataConverter<Trip> = {
  toFirestore: trip => ({
    id: trip.id,
    userEmail: trip.userEmail,
    startTime: Timestamp.fromDate(trip.startTime as Date),
    endTime: trip.endTime ? Timestamp.fromDate(trip.endTime as Date) : null,
    transportType: trip.transportType,
    distance: trip.distance,
    geopoints: trip.geopoints
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options)
    return {
      id: data.id,
      userEmail: data.userEmail,
      startTime: (data.startTime as Timestamp).toDate(),
      endTime: data.endTime ? (data.endTime as Timestamp).toDate() : null,
      transportType: data.transportType,
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
    expiration: Timestamp.fromDate(reward.expiration as Date),
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
      expiration: (data.expiration as Timestamp).toDate(),
      remainingUnits: data.remainingUnits
    }
  }
}