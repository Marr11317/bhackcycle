import {collection, addDoc} from 'firebase/firestore';
import { transition_in } from 'svelte/internal';

interface Location{
    north: number;
    east: number;
}
interface GeoPoint{
    location: Location;
    timeStamp: Date;
}
export async function addUser(name: string, email: string){
    await addDoc(collection(db, "users"), {
        name: name,
        email: email,
      });
}

export async function addTrip(distance: number, geoPoints: GeoPoint[], id: string, transportType: string, startTime: Date, endTime: Date){
    await addDoc(collection(db, "users"), {
        distance: distance,
        end_time: endTime,
        geoPoints: geoPoints,
        id: id,
        transport_type: transportType,
        startTime: startTime,
        endTime: endTime,
      });
}