import { writable as svelteWritable, Writable } from 'svelte/store'

// A wrapper around Sveltle's `writable` to sync with local storage
const _writable = <T>(key: string, defaultValue?: T): Writable<T> => {
  const storageValue = JSON.parse(localStorage.getItem(key)!) as T

  const store = svelteWritable<T>(storageValue || defaultValue)
  store.subscribe(newValue => localStorage.setItem(key, JSON.stringify(newValue)))
  return store
}

const currentTrip = _writable('currentTrip')
export { currentTrip }