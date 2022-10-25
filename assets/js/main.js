const container = document.getElementById("main-container"); 
const title = document.getElementById("title");
const searchId = document.getElementById("inputSearch");
const containerCheckBox = document.getElementById ("container-check");

const date = data.currentDate;
const card = data.events.map(event => event);

const homeCards = card.filter(() => title.text.includes("Home"))
const upcomingCards = card.filter(() => title.text.includes("Upcoming")).filter((card) => card.date > date)  
const pastCards = card.filter(() => title.text.includes("Past")).filter((card) => card.date < date)

let cardsMerged = [...homeCards,...upcomingCards,...pastCards] 
cardsMerged.forEach(getCard) 

const categorys = card.reduce((allCategory, event) => Array.from(new Set([...allCategory, event.category])), [])

categorys.forEach(getCheckBox) 

function getCheckBox(category){
  containerCheckBox.innerHTML += `
  <div class="form-check form-check-inline">
    <input
     class="form-check-input checkBoxId"
     type="checkbox"
     id="${category}"
     value="${category}"
    />
    <label
      class="form-check-label texto_check fw-semibold"
      for="inlineCheckbox1"
    >${category}</label
    >
 </div>
  `
}

let checkBoxId = document.querySelectorAll('.checkBoxId') 
checkBoxId = Array.from(checkBoxId)
checkBoxId.forEach(check => check.addEventListener("click", checkClick)) 
searchId.addEventListener('input', checkClick)

function checkClick(){
  let filteredCheck = cardsByCheckBox (cardsMerged) 
  let filteredSearch = cardsBySearch (filteredCheck, searchId.value)
  if(filteredSearch.length !== 0){
    container.innerHTML = ` `
  }
  filteredSearch.forEach(getCard) 
}

function cardsByCheckBox(array){
  let checkChecked = checkBoxId.filter(check => check.checked).map((checkCategory) => checkCategory.value) 
  if(checkChecked.length > 0){
    let checkBoxFilter = array.filter(event => checkChecked.includes(event.category))
    return checkBoxFilter
  }
  return array
} 

function cardsBySearch(array, texto){
  let cardsFilterBySearch = array.filter (event => event.name.toLowerCase().includes(texto.toLowerCase()));
  if(cardsFilterBySearch.length === 0){
    searchNull()
    return [] 
  }
  return cardsFilterBySearch 
}

function searchNull(){
  container.innerHTML = `
  <article class="container-fluid d-flex justify-content-center align-items-center row col-12">
    <h2 class="text-center text-light">Sorry, invalid search.</h2>
    <img src="../assets/img/error.png" style="width: 200px;" alt="">
  </article>
  `;
}

function getCard(event){
    container.innerHTML += `
    <div class="container-cards d-flex flex-column gap-2">
        <img src="${event.image}" class="card-img-top img-cards pt-3" alt="..">
        <div class="container-card-text card-body p-1">
            <h5 class="card-title card_title text-center pb-1">${event.name}</h5>
            <p class=" cards-texto card-text text-center">${event.description}</p>
        </div>
        <div class=" cards-texto d-flex justify-content-around align-items-center ">
            <p class="cards-texto pt-3">Price: $ ${event.price}</p>
            <a href="../../pages/details.html?id=${event._id}" class="btn btn-light p-1 boton-cards">Details</a>
        </div>
    </div>
    `   
}
