const containerDetails = document.getElementById("container_details");

async function detailsJson() {
  try {
    var detailsApi = await fetch('https://mh-amazing.herokuapp.com/amazing')
    detailsApi = await detailsApi.json()
  } catch (error) {
    console.log(error);
  }
  let eventsDetails = detailsApi.events
  let idLocation = location.search.slice(4)
  let filterDetails = eventsDetails.find(event => idLocation == event.id)
  getCardDetails(filterDetails)
}
detailsJson()


//funcion para imprimir card
function getCardDetails(event) {
  let assistanceEstimate = []
  if (event.assistance !== undefined) {
    assistanceEstimate = ["Assistance", event.asistance]
  } else {
    assistanceEstimate = ["Estimate", event.estimate]
  }
  let date = new Date(event.date).toDateString()
  containerDetails.innerHTML = `
    <div class="card mb-3 card_details" style="max-width:640px;">
    <div class="card mb-3 card_details">
   <img src="${event.image}" class="card-img-top img-details" alt="...">
   <div class="card-body card_details">
    <h5 class="card-title text_details bg-transparent">${event.name}</h5>
    <p class="card-text text_details bg-transparent">${event.description}</p>
    <p class="card-text text_details bg-transparent">Date: ${date}</p>
    <p class="card-text text_details bg-transparent">Place: ${event.place}</p>
    <p class="card-text text_details bg-transparent">Price: $ ${event.price}</p>
   </div>
   </div>
   </div>
    `
}