const firebaseConfig = {
    apiKey: "AIzaSyCVxKmSf_NCl4iyOJjtk-kLoK0-nE46IvI",
    authDomain: "capstone-project-d5f9e.firebaseapp.com",
    databaseURL: "https://capstone-project-d5f9e.firebaseio.com",
    projectId: "capstone-project-d5f9e",
    storageBucket: "capstone-project-d5f9e.appspot.com",
    messagingSenderId: "391206869327",
    appId: "1:391206869327:web:2a86ccda0fe4b452318d3a",
    measurementId: "G-QTC1TCMQZ7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()

  var db=firebase.firestore();

// Add a new document in collection "cities"
// Add a new document with a generated id.


var form=document.getElementById('contact_form');
form.addEventListener('submit',validation);

function validation(e){

    e.preventDefault();

    var name =getInput("name");
    var email =getInput("email");
    var messages =getInput("message");


db.collection("messages").add({
        name: name,
        email:email ,
        message:messages
    })
    .then(function() {
        alert("Messages has been sent");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function getInput(id){
    return document.getElementById(id).value;
}

