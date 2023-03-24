var firebaseConfig = {
      apiKey: "AIzaSyCSXDOUbh86TVPFnx9Fv9VpCc4XHLkKFxM",
      authDomain: "letschat-project-688e3.firebaseapp.com",
      databaseURL: "https://letschat-project-688e3-default-rtdb.firebaseio.com",
      projectId: "letschat-project-688e3",
      storageBucket: "letschat-project-688e3.appspot.com",
      messagingSenderId: "892271480479",
      appId: "1:892271480479:web:9f819c16580ffd71bb5caa",
      measurementId: "G-PTFNSY6TCY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    





user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "welcome "+ user_name;
function addroom(){
      room_name = document.getElementById("room_name").value
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      })
      window.location = "kwitterpage.html"
}


var player_name = localStorage.getItem("username")
document.getElementById("name-display").innerHTML = "Hi "+  player_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("room_name")
      window.location = "index.html";
}



function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();


