const container = document.getElementById("main-container");

for (const event of data.events){
    getCard(event);
}

function getCard(event){
    container.innerHTML += `
    <div class="container-cards card " style="width: 19rem; height: 20rem;">
        <img src="${event.image}" class="card-img-top img-cards pt-3" style="height: 40%; width: 100%;" alt="..">
        <div class="container-cards card-body">
            <h5 class=" cards-texto card-title text-center">${event.name}</h5>
            <p class=" cards-texto card-text text-center">${event.description}</p>
        </div>
        <div class=" cards-texto d-flex justify-content-around align-items-center ">
            <p class="cards-texto pt-3">Price: $ ${event.price}</p>
            <a href="#" class="btn btn-light  p-1 boton-cards">Details</a>
        </div>
    </div>
    `   
}











/* <div class="container-cards  card col-2" style="width: 19rem; height: 20rem;">
<img src="../img/imagen_1.jpg" class="card-img-top img-cards pt-3" style="height: 40%; width: 100%;" alt="...">
<div class=" container-cards card-body">
  <h5 class=" cards-texto card-title text-center">Cinema</h5>
  <p class=" cards-texto card-text text-center">Marvel's Avengers 3d premiere the start of an epic saga with your best superheroes.</p>
  <div class=" cards-texto d-flex justify-content-between align-items-center ">
    <p class="cards-texto">Price: $250</p>
    <a href="#" class="btn btn-light  p-1 boton-cards">Show more</a>
  </div>
</div> */

