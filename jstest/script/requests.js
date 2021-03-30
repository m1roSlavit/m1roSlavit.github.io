// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDfudcPrdYtuys5U5lLL2qH3EBdx88OABA",
//   authDomain: "js-lab-base.firebaseapp.com",
//   projectId: "js-lab-base",
//   storageBucket: "js-lab-base.appspot.com",
//   messagingSenderId: "818103104605",
//   appId: "1:818103104605:web:d80091d2393db5985509b4",
//   measurementId: "G-RY6KQ99XTL"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const getTestData = (id, callback) => {
//   firebase.database().ref('testsData/' + id).get().then(function(snapshot) {
//     callback(snapshot);
//   }).catch(function(error) {
//     console.error(error);
//   });
//   // return "describe(\"pow\", function() {it(\"возводит число в степень n\", function() {assert.equal(func(2, 3), 8);assert.equal(func(3, 4), 81);});});";
// }

const urlAPI = 'https://agile-mountain-00946.herokuapp.com/'

const post = (url, data) => {
  return fetch(url, {
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
  .then(response => response)
}

const getCountByFilter = (filter) => {
  return post(urlAPI + 'tasks/getCountByFilter', filter)
    .then(data => {
      return data.text().then(function (body) {
        return body;
      })
    })
}

const getExerciseByFilter = (filter) => {
  return post(urlAPI + 'tasks/getExerciseByFilter', filter)
    .then(data => {
      return data.text().then(function (body) {
        return body;
      })
    })
}

export {getCountByFilter, getExerciseByFilter};