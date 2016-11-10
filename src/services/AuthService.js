import firebase from 'firebase';

class AuthService {

  static createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  static signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  static isAdmin(userId) {
    return firebase.database().ref(`/roles/admin/${userId}`).once('value');
  }

}

export { AuthService };
