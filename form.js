document.addEventListener("DOMContentLoaded", function () {
  const firebaseConfig = {
    apiKey: "AIzaSyBa3W5hLroJdD070ps0dSCTWrxXEplOwcI",
    authDomain: "medusa-7a733.firebaseapp.com",
    projectId: "medusa-7a733",
    storageBucket: "medusa-7a733.appspot.com",
    messagingSenderId: "347190790414",
    appId: "1:347190790414:web:0cdf780c0354afb3896f5f",
    measurementId: "G-7JYLS18CGJ",
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  function saveFormData() {
    const form = document.getElementById("studentForm");

    const fullName = form.fullname.value;
    const email = form.email.value;
    const contactNumber = form.contactnum.value;
    const nicNumber = form.nicNumber.value;
    const TicketType = form.ticketType.value;
    const NumberofTickets = form.NoOfTickets.value;

    db.collection("medusa")
      .add({
        full_name: fullName,
        email: email,
        contact_number: contactNumber,
        NIC_Number: nicNumber,
        TicketType: TicketType,
        number_of_tickets: NumberofTickets,
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
