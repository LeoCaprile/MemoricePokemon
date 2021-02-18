var firebaseConfig = {
  apiKey: "AIzaSyBRp05EQIjJ5R9cSBT15qL0vgr1r_4oE30",
  authDomain: "memorice-pokemon-5eb22.firebaseapp.com",
  projectId: "memorice-pokemon-5eb22",
  storageBucket: "memorice-pokemon-5eb22.appspot.com",
  messagingSenderId: "581602459160",
  appId: "1:581602459160:web:3657dbb99a4b3aab628d6d",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export let ref = database.ref("/scores");

export function writeUserData(name, size, time) {
  const userData = {
    name: name,
    size: size,
    time: time,
  };
  ref.push(userData);
}
