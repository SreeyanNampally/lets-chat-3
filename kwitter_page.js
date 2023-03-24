var firebaseConfig = {
    apiKey: "AIzaSyDHFhPMLAI2-xGDAPAdYO3Cst8OKYCxGRs",
    authDomain: "kwitter-app-8f6d5.firebaseapp.com",
    databaseURL: "https://kwitter-app-8f6d5-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-8f6d5",
    storageBucket: "kwitter-app-8f6d5.appspot.com",
    messagingSenderId: "251772333317",
    appId: "1:251772333317:web:bd3709c5e38a50c52a9b6c",
    measurementId: "G-9FGC8NE0W1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var username = localStorage.getItem("username")
  var roomname = localStorage.getItem("room_name")

  function send(){
    message = document.getElementById("message").value
    firebase.database().ref(roomname).push({
        name: username,
        message: message,
        like: 0
    })
    document.getElementById("message").value = "";
  }




function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("room_name")
      window.location = "index.html";
}