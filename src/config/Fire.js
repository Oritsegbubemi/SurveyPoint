import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDv8gbdPzwXbpvCzRiTngSekQh4zd_w-tc",
    authDomain: "survey-point-62a91.firebaseapp.com",
    databaseURL: "https://survey-point-62a91.firebaseio.com",
    projectId: "survey-point-62a91",
    storageBucket: "survey-point-62a91.appspot.com",
    messagingSenderId: "491320815696",
    appId: "1:491320815696:web:b7a060dd0b692b737a2155",
    measurementId: "G-GD1SRJCYH0"
};

const Fire = firebase.initializeApp(config);
export default Fire;