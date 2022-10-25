const containerDetails = document.getElementById("container_details");
let eventsDetails = data.events
let idLocation = location.search.slice(4) 

let filterDetails = eventsDetails.filter(event => idLocation == event._id)
filterDetails = filterDetails[0]

getCardDetails (filterDetails)

function getCardDetails(event) {
    containerDetails.innerHTML = `
    <div class="card mb-3" style="max-width: 640px;">
    <div class="row g-0">
      <div class="col-md-5 card_details">
        <img src="${event.image}" class="img-fluid rounded-start img-details" alt="...">
      </div>
      <div class="col-md-7">
        <div class="card-body card_details">
          <h4 class="card-title bg-transparent text_details">${event.name}</h5>
          <h6 class="card-text bg-transparent text_details">${event.description}</p>
          <p class="card-text bg-transparent text_details">Date: ${event.date}</p>
          <p class="card-text bg-transparent text_details">Place: ${event.place}</p> 
          <p class="card-text bg-transparent text_details">Capacity: ${event.capacity}</p> 
        </div>
      </div>
    </div>
  </div>
    `
}