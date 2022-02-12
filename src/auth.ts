import firebaseAuth from "firebase/auth"

export const isLoggedIn = (): boolean => {
  return !!firebaseAuth.getAuth().currentUser
}

export const getCurrentUser = (): string | null => {
  return firebaseAuth.getAuth().currentUser?.email || null
}

export const login = async (email: string, password: string): Promise<boolean> => {
  try {
    await firebaseAuth.signInWithEmailAndPassword(firebaseAuth.getAuth(), email, password)
    return true
  } catch (error) {
    console.log("Failed to login")
    console.log(error)
    return false
  }
}

export const logout = (): Promise<void> => {
  return firebaseAuth.getAuth().signOut()
}
