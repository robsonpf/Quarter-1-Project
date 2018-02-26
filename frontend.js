document.addEventListener("DOMContentLoaded", function() {
  try {
    document.getElementById("save").addEventListener("click", function() {
      //if the form is not completed it should pop out alert
      if(!validateAllForms()) {
        alert('form data invalid');
        return;
      }
      //add a key and value to the object for each input
      var frn = {};
      frn.email = document.getElementById("email").value;
      frn.password = document.getElementById("password").value;
      frn.eventTitle = document.getElementById("eventTitle").value;
      frn.date = document.getElementById("date").value;
      frn.startTime = document.getElementById("startTime").value;
      frn.endTime = document.getElementById("endTime").value;
      frn.organizerName = document.getElementById("organizerName").value;
      frn.phoneNumber = document.getElementById("phoneNumber").value;
      frn.location = document.getElementById("location").value;
      frn.ticketAdmission = document.getElementById("ticketAdmission").value;
      frn.ticketPrice = document.getElementById("ticketPrice").value;
      frn.eventType = document.getElementById("eventType").value;

  //when the submit button is click, the function saveData get call passing the
  //SAVED_EVENTS and the oject and open the events.html page
      saveData("SAVED_EVENTS", frn);
      document.location = 'events.html';
    });
  } catch (err) {
    //just for test suite
  }
})

//save the data in the local storage
function saveData(key, data) {

  let savedEvents = localStorage.getItem(key);
  //console.log(saved_events);
  if(savedEvents === null) {
    savedEvents = '[]';
   //console.log(saved_events)
  }
  savedEvents = JSON.parse(savedEvents);
  savedEvents.push(JSON.stringify(data));
  //console.log(savedEvents)
  localStorage.setItem(key, JSON.stringify(savedEvents));
  //alert('saving event');

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


// load the form in the local storage and append the values in the table 
function loadFormData() {

  var userData = loadData("SAVED_EVENTS");

  let table = document.getElementById("eventsTbl");
  for(i = 0; i < userData.length; i++) {
    let json = JSON.parse(userData[i]);
    let tr = document.createElement('tr');
    let tdEventTitle = document.createElement('td');
    console.log(json);
    tdEventTitle.innerHTML = json.eventTitle;
    tr.appendChild(tdEventTitle);

    let tdEventDate = document.createElement('td');
    tdEventDate.innerHTML = json.date;
    tr.appendChild(tdEventDate);

    let tdEventLocation = document.createElement('td');
    tdEventLocation.innerHTML = json.location;
    tr.appendChild(tdEventLocation);

    let tdStartTime = document.createElement('td');
    tdStartTime.innerHTML = json.startTime;
    tr.appendChild(tdStartTime);

    let tdEndTime = document.createElement('td');
    tdEndTime.innerHTML = json.endTime;
    tr.appendChild(tdEndTime);


    table.appendChild(tr);
  }

}

function loadData(key) {
  let userData = localStorage.getItem(key);
  userData = JSON.parse(userData);
  return userData;
}

function deleteData(key) {
  localStorage.removeItem(key);
}
