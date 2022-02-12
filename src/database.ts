import { collection, doc, setDoc, getDoc, getDocs, getFirestore, DocumentReference } from 'firebase/firestore'
import { rewardConverter, userConverter, tripConverter } from './data_converter'

const db = getFirestore()
const userDoc = (email: string): DocumentReference<BaseUser> => doc(db, 'users', email).withConverter(userConverter)
const tripDoc = (trip: Trip): DocumentReference<Trip> => doc(db, 'trips', trip.id).withConverter(tripConverter)
const rewardDoc = (reward: Reward): DocumentReference<Reward> => doc(db, 'rewards', reward.id).withConverter(rewardConverter)

const updateUser = async (user: User): Promise<void> => {
  await setDoc(userDoc(user.email), user)
}

const updateTrip = async (trip: Trip): Promise<void> => {
  await setDoc(tripDoc(trip), trip)
}

const updateReward = async (reward: Reward): Promise<void> => {
  await setDoc(rewardDoc(reward), reward)
}

const fetchUser = async (email: string): Promise<BaseUser | null> => {
  const docSnap = await getDoc(userDoc(email))
  if (!docSnap.exists()) {return null}
  return docSnap.data()
}

const fetchRewards = async (id: string): Promise<Reward[]> => {
  const rewards: Reward[] = []
  const querySnapshot = await getDocs(collection(db, "rewards").withConverter(rewardConverter));
  (querySnapshot).forEach((doc) => {
    if (doc.exists()) {
      rewards.push(doc.data())
    }
  })
  return rewards
}

export default { fetchUser, fetchRewards, updateUser, updateTrip, updateReward }