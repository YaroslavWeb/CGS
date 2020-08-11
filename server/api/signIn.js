import firebase from 'firebase'

export const auth = async({email, password}) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
}