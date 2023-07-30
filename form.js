document.addEventListener("DOMContentLoaded", function () {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAox_PBf4E7Vmewb4xTzEsDUXnUuPj4KB4",
  //   authDomain: "medusa-c9963.firebaseapp.com",
  //   projectId: "medusa-c9963",
  //   storageBucket: "medusa-c9963.appspot.com",
  //   messagingSenderId: "1076162338462",
  //   appId: "1:1076162338462:web:322e7d8ff1761c68c9a58f",
  //   measurementId: "G-FN51P597T2"
  // };
  const firebaseConfig = {
    apiKey: "AIzaSyAxWlSYGpkpkKcYvzNFKxe1jJ9PFa6xTa4",
    authDomain: "medusa-3bb52.firebaseapp.com",
    databaseURL:
      "https://medusa-3bb52-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "medusa-3bb52",
    storageBucket: "medusa-3bb52.appspot.com",
    messagingSenderId: "380806606306",
    appId: "1:380806606306:web:a70759f013f6a924891dbb",
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  function saveFormData() {
    const form = document.getElementById("studentForm");

    const fullName = form.fullname.value;
    const email = form.email.value;
    const faculty = form.faculty.value;
    const degreeProgram = form.degree.value;
    const studentNumber = form.studentnum.value;
    const contactNumber = form.contactnum.value;

    db.collection("medusa")
      .add({
        full_name: fullName,
        email: email,
        faculty: faculty,
        degree_program: degreeProgram,
        student_number: studentNumber,
        contact_number: contactNumber,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        // Clear form after successful submission
        form.reset();
        // Redirect to success.html after successful submission
        window.location.href = "success.html";
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  const form = document.getElementById("studentForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    saveFormData();
  });
});
