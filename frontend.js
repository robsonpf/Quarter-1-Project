document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("save").addEventListener("click", function() {
    saveFormData();
  });
})

function saveFormData() {
  if(!validateAllForms()) {
    alert('form data invalid');
    return;
  }
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
  let savedEvents = localStorage.getItem("SAVED_EVENTS");
  //console.log(saved_events);
  if(savedEvents === null) {
    savedEvents = '[]';
  //  console.log(saved_events)
  }
  savedEvents = JSON.parse(savedEvents);
  savedEvents.push(JSON.stringify(frn));
  localStorage.setItem("SAVED_EVENTS", JSON.stringify(savedEvents));
  //alert('saving event');
  document.elementById("myForm").addEventListener('click', validateAllForms);
}


function validateAllForms() {
  var isValid = true;
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
  if(email === null || email === undefined || email === '') {
    return false;
  }
  if (eventTitle === null || eventTitle === undefined || eventTitle === '') {
    return false;
  }
  if (date === null || date === undefined || date === '') {
    return false
  }
  if (startTime === null || startTime === undefined || startTime === '') {
    return false;
  }
  if (endTime === null || endTime === undefined || endTime === '') {
    return false;
  }
  if (organizerName === null || organizerName === undefined || organizerName === '') {
    return false;
  }
  if (phoneNumber === null || phoneNumber === undefined || phoneNumber === '') {
    return false;
  }
  if (location === null || location === undefined || location === '') {
    return false;
  }
  if (ticketAdmission === null || ticketAdmission === undefined || ticketAdmission === '') {
    return false;
  }
  if (ticketPrice === null || ticketPrice === undefined || ticketPrice === '') {
    return false;
  }

  return isValid;

}
