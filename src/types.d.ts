declare module 'svelte-custom-elements'

declare type DatabaseUser = {
  email: string
  name: string
  credits: number
  redeemedRewards: string[]
}

declare type User = {
  email: string
  name: string
  credits: number
  trips: Trip[]
  redeemedRewards: Reward[]
}

declare type TransportType = "bicycle" | "walk" | "publicTransport"

declare type Trip = {
  id: string
  userEmail: string
  startTime: Date
  endTime: Date | null
  transportType: TransportType
  distance: number | null
  geopoints: GeopointWithTimestamp[]
}

declare type PendingTrip = {
  id: string
  userEmail: string
  startTime: string
  transportType: TransportType
  geopoints: GeopointWithTimestamp[]
}

declare type Geopoint = {
  latitude: number
  longitude: number
}

declare type GeopointWithTimestamp = {
  location: Geopoint
  timestamp: string
}

declare type RewardProvider = {
  name: string
  description: string
  icon: string
  location: Geopoint
}

declare type Reward = {
  id: string
  name: string
  description: string
  price: number
  provider: RewardProvider
  expiration: Date | null
  remainingUnits: number | null
}
