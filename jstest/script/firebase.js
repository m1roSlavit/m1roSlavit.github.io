// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfudcPrdYtuys5U5lLL2qH3EBdx88OABA",
  authDomain: "js-lab-base.firebaseapp.com",
  projectId: "js-lab-base",
  storageBucket: "js-lab-base.appspot.com",
  messagingSenderId: "818103104605",
  appId: "1:818103104605:web:d80091d2393db5985509b4",
  measurementId: "G-RY6KQ99XTL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const getTestData = (id, callback) => {
  firebase.database().ref('testsData/' + id).get().then(function(snapshot) {
    callback(snapshot);
  }).catch(function(error) {
    console.error(error);
  });
  // return "describe(\"pow\", function() {it(\"возводит число в степень n\", function() {assert.equal(func(2, 3), 8);assert.equal(func(3, 4), 81);});});";
}

export {getTestData};