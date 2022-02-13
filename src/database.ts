import { collection, doc, setDoc, getDoc, getDocs, getFirestore, DocumentReference, deleteDoc } from 'firebase/firestore'
import { rewardConverter, userConverter, tripConverter } from './data_converter'

const db = () => getFirestore()
const userDoc = (email: string): DocumentReference<DatabaseUser> => doc(db(), 'users', email).withConverter(userConverter)
const tripDoc = (trip: Trip): DocumentReference<Trip> => doc(db(), 'trips', trip.id).withConverter(tripConverter)
const rewardDoc = (reward: Reward): DocumentReference<Reward> => doc(db(), 'rewards', reward.id).withConverter(rewardConverter)

const updateUser = async (user: User): Promise<void> => {
  const { redeemedRewards, ...others } = user
  const dbUser: DatabaseUser = { ...others, redeemedRewards: redeemedRewards.map(x => x.id) }
  await setDoc(userDoc(user.email), dbUser)
}

const updateTrip = async (trip: Trip): Promise<void> => {
  await setDoc(tripDoc(trip), trip)
}

const updateReward = async (reward: Reward): Promise<void> => {
  await setDoc(rewardDoc(reward), reward)
}

const fetchUser = async (email: string): Promise<User | null> => {
  const docSnap = await getDoc(userDoc(email))
  if (!docSnap.exists()) { return null }
  const baseUser: DatabaseUser = docSnap.data()
  const { redeemedRewards: rewardIds, ...others } = baseUser

  const trips = await fetchUserTrips(baseUser.email)
  const redeemedRewards = (await fetchAllRewards()).filter(reward => (rewardIds || []).includes(reward.id))
  return { ...others, trips: trips, redeemedRewards }
}

const fetchUserTrips = async (userEmail: string): Promise<Trip[]> => {
  const trips: Trip[] = []

  const snap = await getDocs(collection(db(), "trips").withConverter(tripConverter))
  snap.forEach(doc => doc.exists() && trips.push(doc.data()))
  return trips.filter(trip => trip.userEmail === userEmail)
}

const deleteTrip = async (tripId: string) => {
  const snap = await getDocs(collection(db(), "trips").withConverter(tripConverter))
  snap.forEach(doc => {
    if (doc.exists() && doc.data().id === tripId) {
      deleteDoc(doc.ref);
    } 
  });
}

const fetchAllRewards = async (): Promise<Reward[]> => {
  const rewards: Reward[] = []

  const snap = await getDocs(collection(db(), "rewards").withConverter(rewardConverter))
  snap.forEach(doc => doc.exists() && rewards.push(doc.data()))
  return rewards
}

export default { fetchUser, fetchAllRewards, updateUser, updateTrip, updateReward, deleteTrip }