import * as firebaseAuth from "firebase/auth"
import database from "./database";

const isLoggedIn = (): boolean => {
  return !!firebaseAuth.getAuth().currentUser
}

const getCurrentUser = (): string | null => {
  return firebaseAuth.getAuth().currentUser?.email || null
}

const login = async (email: string, password: string): Promise<boolean> => {
  try {
    await firebaseAuth.signInWithEmailAndPassword(firebaseAuth.getAuth(), email, password)
    return true
  } catch (error) {
    console.log("Failed to login")
    console.log(error)
    return false
  }
}

const logout = (): Promise<void> => {
  return firebaseAuth.getAuth().signOut()
}

const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
  try {
    await firebaseAuth.createUserWithEmailAndPassword(firebaseAuth.getAuth(), email, password)
    await database.updateUser({email: email, name: name, credits: 100, redeemedRewards: [], trips: []})
    return true
  } catch (error) {
    console.log("Failed to sign up")
    console.log(error)
    return false
  }
}

export default { logout, login, getCurrentUser, isLoggedIn, signUp }
