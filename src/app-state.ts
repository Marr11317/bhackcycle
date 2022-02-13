import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import haversineDistance from 'haversine-distance'

// A wrapper around Sveltle's `writable` to sync with local storage
const persistentWritable = <T>(key: string, defaultValue?: T): Writable<T> => {
  const storageValue = localStorage.getItem(key)
  const store = writable<T>(storageValue ? JSON.parse(storageValue) as T : defaultValue)
  store.subscribe(newValue => localStorage.setItem(key, newValue ? JSON.stringify(newValue) : ""))
  return store
}

const logged = writable<boolean | null>(false);

const loadedUser = writable<User | null>(null)
const allRewards = writable<Reward[] | null>(null)
const currentTrip = persistentWritable<PendingTrip | null>('currentTrip', null)

const addTripEndpoint = (location: Geopoint) => {
  currentTrip.update(trip => {
    if (!trip) { return null }
    trip.geopoints = [...trip.geopoints, { timestamp: new Date().toISOString(), location }]
    return trip
  })
}

const computeTripDistance = (geopoints: GeopointWithTimestamp[]): number => {
  if (!geopoints.length) { return 0 }

  let distance = 0
  for (let i = 1; i < geopoints.length - 1; ++i) {
    distance += haversineDistance(geopoints[i - 1].location, geopoints[i].location)
  }
  return distance
}

const averagePosition = (trip: Trip): Geopoint => {
  let sum = trip.geopoints
  .map((a) => {
    return {
      latitude: a.location.latitude, 
      longitude: a.location.longitude
    }
  })
  .reduce((a, b) => {
    return {
      latitude: a.latitude + b.latitude,
      longitude: b.longitude + a.longitude
    }
  });
  sum.latitude /= trip.geopoints.length;
  sum.longitude /= trip.geopoints.length;
  return sum;
}

export { logged, currentTrip, loadedUser, allRewards, addTripEndpoint, averagePosition, computeTripDistance }
