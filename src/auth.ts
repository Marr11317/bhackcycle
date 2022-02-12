import * as firebaseAuth from "firebase/auth"

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

export default { logout, login, getCurrentUser, isLoggedIn }
