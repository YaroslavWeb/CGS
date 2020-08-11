import firebase from 'firebase'

export const reg = async({email, password, nickname}) =>{
  await firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => console.log(err))
}