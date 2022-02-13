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
const currentTrip = persistentWritable<PendingTrip | null>('currentTrip', {
  id: '1',
  userEmail: 'suptom3@gmail.com',
  startTime: new Date(),
  transportType: 'velo',
  geopoints: []
})

const addTripEndpoint = (location: Geopoint) => {
  currentTrip.update(trip => {
    if (!trip) { return null }
    trip.geopoints = [...trip.geopoints, { timestamp: new Date(), location }]
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

export { logged, currentTrip, loadedUser, allRewards, addTripEndpoint, computeTripDistance }
