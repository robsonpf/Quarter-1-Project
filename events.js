function loadFormData() {

  let userData = localStorage.getItem("SAVED_EVENTS");
  userData = JSON.parse(userData);
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
