import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBAQPRnHl842pJ6QkaCrG3kuZr3BHIWliE",
    authDomain: "doing-it-the-react-way.firebaseapp.com",
    projectId: "doing-it-the-react-way",
    storageBucket: "doing-it-the-react-way.appspot.com",
    messagingSenderId: "545071858875",
    appId: "1:545071858875:web:c11a952586faaec6eb559e"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()


/*

const colRef = collection(db, 'MovieList')
getDocs(colRef).then((snapshot) => {
    let movieList = []
    snapshot.docs.forEach((doc) => {
        movieList.push({ ...doc.data(), id: doc.id })
    })
    console.log(movieList)
}).catch(err => {
    console.log(err.message)
})

*/