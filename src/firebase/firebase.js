import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, update, get, onValue, off, push, onChildRemoved, onChildChanged, onChildAdded } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

//const auth = getAuth(app);
const database = getDatabase(app);

export { database as default };

// // child_removed
// onChildRemoved(ref(database, 'expenses'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// onChildChanged(ref(database, 'expenses'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// onChildAdded(ref(database, 'expenses'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// get(ref(database, 'expenses'))
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// const onValueChange = onValue(ref(database, 'expenses'), (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// push(ref(database, 'expenses'), {
//     description: 'rent',
//     note: 'last months rent',
//     amount: 1000,
//     createdAt: 1223
// });

// push(ref(database, 'notes'), {
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const onValueChange = onValue(ref(database), (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// const onValueChange = onValue(ref(database), (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     set(ref(database, 'age'), 29);
// }, 3500);

// setTimeout(() => {
//     off(ref(database), null, onValueChange);
// }, 7000);

// setTimeout(() => {
//     set(ref(database, 'age'), 30);
// }, 10500);

// get(ref(database, 'location/city'))
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     });

// set(ref(database), {
//     name: 'Steve Manning',
//     age: 46,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Studley',
//         country: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed.', e)
// });

// update(ref(database), {
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// remove(ref(database, 'isSingle'))
//     .then(() => {
//         console.log('Data was removed');
//     }).catch(() => {
//         console.log('Did not remove data', e);
//     });