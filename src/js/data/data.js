import firebase from 'firebase'


const config = {
  apiKey: "AIzaSyCvSI0tBl4a0AiSzKf56wlnNbSruGbL5mc",
  authDomain: "order-some-food-e6133.firebaseapp.com",
  databaseURL: "https://order-some-food-e6133.firebaseio.com",
  projectId: "order-some-food-e6133",
  storageBucket: "order-some-food-e6133.appspot.com",
  messagingSenderId: "913348441014"
};

firebase.initializeApp(config)

export default firebase.database()