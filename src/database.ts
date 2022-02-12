import {collection, doc, addDoc, getDoc, getDocs, setDoc, getFirestore} from 'firebase/firestore';
import {rewardConverter, userConverter} from './data_converter';
interface Location{
    north: number;
    east: number;
}
const db = getFirestore();
export async function addUser(user: User, id: string){
    await setDoc(doc(db, "users", id).withConverter(userConverter), user);
}

export async function addTrip(trip: Trip) {
    await addDoc(collection(db, "trip"), {
        distance: trip.distance,
        end_time: trip.endTime,
        geoPoints: trip.geopoints,
        id: trip.id,
        transport_type: trip.transportType,
        startTime: trip.startTime,
        endTime: trip.endTime,
      });
}

export async function addReward(reward: Reward) {
    await addDoc(collection(db, "rewards"), {
        name: reward.name,
        description: reward.description,
        price: reward.price,
        provider: reward.provider,
        expiration: reward.expiration,
        remaining_units: reward.remainingUnits
    })
}

export async function fetchUser(id: string): Promise<User | null> {
    const docRef = doc(db, "users", id).withConverter(userConverter);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        const user = docSnap.data();
        return user;
    }
    return null;
}

export async function fetchRewards(id: string): Promise<Reward[]> {
    const rewards: Reward[] = [];
    const querySnapshot = await getDocs(collection(db, "rewards").withConverter(rewardConverter));
    (querySnapshot).forEach((doc) => {
        if(doc.exists()) {
            rewards.push(doc.data());
        }
    })
    return rewards;
}