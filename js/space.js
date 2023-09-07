const url = "https://images-api.nasa.gov/search?q=";
let planeta = "";
let arrayPlanetas = [];

const searchForm = document.querySelector('#inputBuscar');
const searchButton = document.querySelector('#btnBuscar');
const resultsContainer = document.querySelector('#contenedor');

document.addEventListener('DOMContentLoaded', function() {

    searchForm.addEventListener('keyup', function(e) {
        if(e.key === 'Enter') {
            search();
        }
    });

});

searchButton.addEventListener('click', search);


function search() {
    resultsContainer.innerHTML = ""
    planeta = searchForm.value;
    consultaAPI();
}

function consultaAPI(){
    fetch(url+planeta)
    .then(response => response.json())
    .then(result => {
        arrayPlanetas = result.collection.items;
        // display();
        display2();
    })
    .catch(error => console.error('Error:', error)); //SE PUEDE PROBAR
}

/*
function display() {
    resultsContainer.innerHTML = '';
    arrayPlanetas.forEach(item => {
        const title = item.data[0].title;
        const imagen = item.links[0].href;
        const description = item.data[0].description;
        const dateCreated = item.data[0].date_created;

        const resultItem = document.createElement('DIV');
        resultItem.classList.add('item');

        const titleItem = document.createElement('H2');
        titleItem.textContent = title;

        const imagenItem = document.createElement('IMG');
        imagenItem.src = imagen;

        const descriptionItem = document.createElement('P');
        descriptionItem.textContent = description;

        const dateItem = document.createElement('P');
        dateItem.textContent = 'Fecha: ' + dateCreated;

        resultItem.appendChild(titleItem);
        resultItem.appendChild(imagenItem);
        resultItem.appendChild(descriptionItem);
        resultItem.appendChild(dateItem);

        resultsContainer.appendChild(resultItem);
    });
}
*/

// Alternativa para mostrar las cosas en el HTML
function display2() {
   // resultsContainer.innerHTML = '';
    arrayPlanetas.forEach(item => {
       debugger;
        consultahtml = `
        <div class= "col-4">
        <div class="card" >
               <img src="${item.links[0].href}" style="width:100%;height:150px" class= "card-img-top alt="...">
             <div class="card-body" style="overflow:auto;max-height:280px">
             <h5 class= "card-title" style=""> "${item.data[0].title}"
             <p class="card-text text-body-secondary"> ${item.data[0].description} </p>
             <p class="card-text text-body-secondary> ${item.data[0].date_created} </p>
               </div>
               </div>
       </div>
        `;
    
        resultsContainer.innerHTML += consultahtml;
    });
    }

    //width="100%" height="180" class="card-img-top" alt="...">
    /*<div class="card" style="width: 12rem;">
    <img src="${item.links[0].href}" class= "card-img-top alt="...">
    </div>
<div class="card-body"  style="width: 12rem;">
<h5 class= "card-title"> "${item.data[0].title}"

<p class="card-text text-body-secondary"> ${item.data[0].description} </p>
    </div>
    </div>
*/