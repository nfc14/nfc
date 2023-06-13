const firebaseConfig = {
  apiKey: "AIzaSyDtZzOYniXLlitnbcqePjY58RKr4hjU2JM",
  authDomain: "cardmain1.firebaseapp.com",
  databaseURL: "https://cardmain1-default-rtdb.firebaseio.com",
  projectId: "cardmain1",
  storageBucket: "cardmain1.appspot.com",
  messagingSenderId: "910144714845",
  appId: "1:910144714845:web:5f7e9101cbda42aa57f5b4"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
