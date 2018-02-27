import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('child removed', snapshot.key, snapshot.val())
// })

// // child_change
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('child changed', snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('child changed', snapshot.key, snapshot.val())
// })

// const firebaseNotes = {
//     12: {
//         title: 'First note',
//         body: 'This is my note'
//     }, 
//     ius: {
//         title: 'Second note',
//         body: 'This is my note'
//     }, 
//     0: {
//         title: 'Third note',
//         body: 'This is my note'
//     }
    
// }

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '67ius',
//     title: 'Second note',
//     body: 'This is my note'
// }, {
//     id: '0',
//     title: 'Third note',
//     body: 'This is my note'
// }]

// database.ref('notes').set(firebaseNotes)

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('error: ', e)
// })

// setTimeout(() => {
//     database.ref('age').set(28)
// }, 3500)

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('error: ', e)
//     })

