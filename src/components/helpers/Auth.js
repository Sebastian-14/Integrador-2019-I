import {firebaseAuth, ref} from '../../initializers/firebase'

const saveUser = (user) => (
  ref
      .child(`users/${user.uid}/info`)
      .set({
          email: user.email,
          uid: user.uid
      })
      .then(() => user)
)

const auth = (email, password) => (
  firebaseAuth()
      .createUserWithEmailAndPassword(email, password)
      .then(saveUser)
)

export {saveUser, auth}