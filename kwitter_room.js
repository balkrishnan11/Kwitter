
//ADD YOUR FIREBASE LINKS H
var firebaseConfig = {
      apiKey: "AIzaSyAU1VNhud35bJsTJ5ViTymtKdJA8zI6ZMM",
      authDomain: "kwitter-283f9.firebaseapp.com",
      databaseURL: "https://kwitter-283f9-default-rtdb.firebaseio.com",
      projectId: "kwitter-283f9",
      storageBucket: "kwitter-283f9.appspot.com",
      messagingSenderId: "712458310592",
      appId: "1:712458310592:web:19064ea8e479be2b48ae25"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;
 
firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}
function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}