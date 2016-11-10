import firebase from 'firebase';

class UserService {
  static getUser(userId) {
    return firebase.database().ref(`/users/${userId}`).once('value');
  }
}

export { UserService };
