const container = document.getElementById("main-container");

let currentDate = new Date (data.currentDate);
let date;

for (const event of data.events) {
    date = new Date (event.date);
    if (currentDate.getTime() > date.getTime()) {
        getCard(event);
    }
}

function getCard(event){
    container.innerHTML += `
    <div class="container-cards card col-2" style="width: 19rem; height: 20rem;">
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