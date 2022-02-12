import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

// A wrapper around Sveltle's `writable` to sync with local storage
const persistentWritable = <T>(key: string, defaultValue?: T): Writable<T> => {
  const storageValue = localStorage.getItem(key)
  const store = writable<T>(storageValue ? JSON.parse(storageValue) as T : defaultValue)
  store.subscribe(newValue => localStorage.setItem(key, newValue ? JSON.stringify(newValue) : ""))
  return store
}

const _debugTrip = (): PendingTrip => {
  const startTime = new Date()
  const time1= new Date()
  const time2 = new Date()
  const time3 = new Date()
  
  startTime.setHours(8, 0, 0, 0)
  time1.setHours(8, 0, 0, 0)
  time2.setHours(8, 0, 5, 0)
  time3.setHours(8, 0, 10, 0)

  return {
    id: '1',
    userEmail: 'suptom3@gmail.com',
    startTime: startTime,
    transportType: 'velo',
    geopoints: [
      { location: { lattitude: 1, longitude: 1 }, timestamp: time1 },
      { location: { lattitude: 1, longitude: 2 }, timestamp: time2 },
      { location: { lattitude: 1, longitude: 3 }, timestamp: time3 },
    ]
  }
}

const loadedUser = writable<User | null>(null)
const currentTrip = persistentWritable<PendingTrip | null>('currentTrip', _debugTrip())

const addTripEndpoint = (location: Geopoint) => {
  currentTrip.update(trip => {
    if (!trip) { return null }
    trip.geopoints = [...trip.geopoints, { timestamp: new Date(), location }]
    return trip
  })
}

export { currentTrip, loadedUser, addTripEndpoint }