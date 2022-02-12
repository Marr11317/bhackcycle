declare type DatabaseUser = {
  email: string
  name: string
  credits: number
}

declare type User = BaseUser & {
  email: string
  name: string
  credits: number
  trips: Trip[]
}

declare type Trip = {
  id: string
  userEmail: string
  startTime: Date
  endTime: Date | null
  transportType: string
  distance: number | null
  geopoints: GeopointWithTimestamp[]
}

declare type PendingTrip = Omit<Trip, 'endTime' | 'distance'>

declare type Geopoint = {
  lattitude: number
  longitude: number
}

declare type GeopointWithTimestamp = {
  location: Geopoint
  timestamp: Date
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