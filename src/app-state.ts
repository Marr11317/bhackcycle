import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

// A wrapper around Sveltle's `writable` to sync with local storage
const persistentWritable = <T>(key: string, defaultValue?: T): Writable<T> => {
  const storageValue = localStorage.getItem(key)
  const store = writable<T>(storageValue ? JSON.parse(storageValue) as T : defaultValue)
  store.subscribe(newValue => localStorage.setItem(key, newValue ? JSON.stringify(newValue) : ""))
  return store
}

const loadedUser = writable<User | null>(null)
const currentTrip = persistentWritable<PendingTrip | null>('currentTrip', null)

const addTripEndpoint = (location: Geopoint) => {
  currentTrip.update(trip => {
    if (!trip) { return null }
    trip.geopoints = [...trip.geopoints, { timestamp: new Date(), location }]
    return trip
  })
}

export { currentTrip, loadedUser, addTripEndpoint }