
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBGmn8WzH1oUkW28_c1BHlEc-osZtI1rjI",
      authDomain: "kwitter-a16d7.firebaseapp.com",
      databaseURL: "https://kwitter-a16d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-a16d7",
      storageBucket: "kwitter-a16d7.appspot.com",
      messagingSenderId: "404389047984",
      appId: "1:404389047984:web:8d7b56690ef8ac92ea1575"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name")
 document.getElementById("user_name").innerHTML="Welcome-"+user_name+"!"
function addRoom(){
room_name = document.getElementById("room_name").value

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
})
localStorage.setItem("room_name" , room_name)

window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name- " + Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html"
}