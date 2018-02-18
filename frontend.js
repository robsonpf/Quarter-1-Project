document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("save").addEventListener("click", function() {
    saveFormData();
  });
})



function saveFormData() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let eventTitle = document.getElementById("eventTitle").value;
  let date = document.getElementById("date").value;
  let startTime = document.getElementById("startTime").value;
  let endTime = document.getElementById("endTime").value;
  let organizerName = document.getElementById("organizerName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let location = document.getElementById("location").value;
  let ticketAdmission = document.getElementById("ticketAdmission").value;
  let ticketPrice = document.getElementById("ticketPrice").value;
  let eventType = document.getElementById("eventType").value;
  //let ticketsAvalaible = document.getElementById("ticketsAvalaible").value;


  let frn = {};
  frn.email = email;
  frn.password = password;
  frn.eventTitle = eventTitle;
  frn.date = date;
  frn.startTime = startTime;
  frn.endTime = endTime;
  frn.organizerName = organizerName;
  frn.phoneNumber = phoneNumber;
  frn.location = location;
  frn.ticketAdmission = ticketAdmission;
  frn.ticketPrice = ticketPrice;
  frn.eventType = eventType;
  //frn.ticketsAvalaible = ticketsAvalaible;
  let saved_events = localStorage.getItem("SAVED_EVENTS");
  console.log(saved_events);
  if(saved_events === null) {
    saved_events = '[]';
    console.log(saved_events)
  }
  saved_events = JSON.parse(saved_events);
  saved_events.push(JSON.stringify(frn));
  localStorage.setItem("SAVED_EVENTS", JSON.stringify(saved_events));
  //alert('saving event');
}



function loadFormData() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let eventTitle = document.getElementById("eventTitle").value;
  let date = document.getElementById("date").value;
  let startTime = document.getElementById("startTime").value;
  let endTime = document.getElementById("endTime").value;
  let organizerName = document.getElementById("organizerName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let location = document.getElementById("location").value;
  let ticketAdmission = document.getElementById("ticketAdmission").value;
  let ticketPrice = document.getElementById("ticketPrice").value;
  let eventType = document.getElementById("eventType").value;
  let ticketsAvalaible = document.getElementById("ticketsAvalaible").value;
  let  = document.getElementById("").value;
  let userData = localStorage.getItem("USER_DATA");
  console.log(userData);
  email = JSON.parse(userData).email;
  password = JSON.parse(userData).password;
  eventTitle = JSON.parse(userData).eventTitle;
  date = JSON.parse(userData).date;
  startTime = JSON.parse(userData).startTime;
  endTime = JSON.parse(userData).endTime;
  organizerName = JSON.parse(userData).organizerName;
  phoneNumber = JSON.parse(userData).phoneNumber;
  location = JSON.parse(userData).location;
  ticketAdmission = JSON.parse(userData).ticketAdmission;
  ticketPrice = JSON.parse(userData).ticketPrice;
  ticketsAvalaible = JSON.parse(userData).ticketsAvalaible;
  eventType = JSON.parse(userData).eventType;
}
