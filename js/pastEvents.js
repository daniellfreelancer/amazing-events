const titleSite = document.title;
const loading = "Cargando...";
const containerCategory = "category-container";
const searchButton = document.getElementById("search");
const inputSearch = document.getElementById("form-search");
const checkArea = document.getElementById("category-container");

//------------------------------ ✖️ ✔️

async function amazingEventsWeb(){

    const apiAmazingEvents = await fetch("https://amazing-events.herokuapp.com/api/events");
    console.log(apiAmazingEvents) // esta es la respuesta
    let myData = await apiAmazingEvents.json() // method que hace un read del response
    
    // un array de objetos ✔️
    let eventos = myData.events
    // fecha de referencia ✔️

    let fechaReferencia =  myData.currentDate
    { titleSite === "Past Events" ? createCards(eventos, "card-container") : loading }
    // listener del los checkbox
    checkArea.addEventListener("change", () => {
        let filteredCat = amazingChecks(eventos)
        let filteredCards = filterCardsBySearch(filteredCat, inputSearch.value)
        createCards(filteredCards, "card-container")
    })
    
    //listener del inputSearch
    searchButton.addEventListener("click", (e) => {
        e.preventDefault()
        let filteredCards = filterCardsBySearch(eventos, inputSearch.value)
        let filteredCat = amazingChecks(filteredCards)
        createCards(filteredCat, "card-container")
    })
    
    // Crear categorias
    function creatCategory(array, divForm) {
        array.forEach((cat) => {
            let containerForm = document.getElementById(divForm)
            let categorias = document.createElement("div");
            categorias.className = "form-check";
            categorias.innerHTML = `<label class="form-check-label cat-buttons" for="${cat}">
         ${cat}
         <input name="${cat}" class="form-check-input" type="checkbox" value="${cat}"
             id="${cat}">
         </label>`
            containerForm.appendChild(categorias)
            return cat;
        })
    }
    function filtrarCategory(){
        let arrayCategoriasData = [];
        eventos.map(e=> {
            arrayCategoriasData.push(e.category)
        })
        let arrayCategorias = arrayCategoriasData.filter((cat, i) => {
            return arrayCategoriasData.indexOf(cat) === i;
        })
        return arrayCategorias;
    }
    // Crear Cards
    function createCards(amazing, container) {
        let containerAbuelo = document.getElementById(container);
        containerAbuelo.innerHTML = ""
        //
        amazing.forEach((e) => {
            if (e.date < fechaReferencia) {
                let eventos = document.createElement("div");
                eventos.className = "profile-card-4 text-center"
                eventos.innerHTML = `<img src=${e.image} class="img" alt="img-card" >
                  <div class="profile-content">                        
                      <div class="row align-items-center ">
                          <div class="col-xs-4">
                              <div class="profile-overview">
                                  <h4>${e.name}</h4>
                                 <p>${e.category}</p>
                                 <p>${e.date}</p>
                              </div>
                          </div>
                          <div class="d-flex justify-content-around align-items-center">
                              <div class="profile-overview pb-4">
                                  <h4>Price: $ ${e.price}</h4>
                             </div>
                                  <a class="text-decoration-none btn-see" href="./details.html?id=${e._id}">See-more...</a>
                          </div>
                     </div>
                 </div>`
                containerAbuelo.appendChild(eventos)
            }
            
        })
    }
    creatCategory(filtrarCategory(), containerCategory);
    
    function amazingChecks(amazing){
        //array de categorias de checkbox
        const checkboxes = document.querySelectorAll("input[type='checkbox']")
        let checkboxesChecked = Array.from(checkboxes).filter(check => check.checked).map((e) => e.value)
        if (checkboxesChecked.length > 0 ){
            let filteredCheckBox = amazing.filter(e => checkboxesChecked.includes(e.category))
            return filteredCheckBox
        }
        return amazing
    }
    
    //-- por boton de categoria Ya esta funcion no es necesaria linea 109
    function filterCards(amazing, check) {
        let cardsFiltradas = amazing.filter(e => check.includes(e.category))
        return cardsFiltradas
    }
    
    //                           arrayDB, textUsuario[]
    function filterCardsBySearch(amazing,textoSearch){
        let cardsfiltradasporcategoria = amazing.filter(e => e.name.toLowerCase().includes(textoSearch.toLowerCase()));
        
        if(cardsfiltradasporcategoria.length == 0){
            noFound(textoSearch)
            return [];
        } 
        return cardsfiltradasporcategoria
    }
    
    function noFound(textoSearch){
        let padre = document.getElementById("no-found")
        let div = document.createElement("div")
        div.className = "container d-flex d-flex justify-content-center contact-div py-5";
        div.innerHTML = `<div class="row">
                        <div class="col-md-12">
                            <div class="error-template">
                                <h1>
                                    Oops!</h1>
                                <h2>
                                    404 Not Found</h2>
                                <div class="error-details">
                                    Sorry,  ${textoSearch} , page not found!
                                </div>
                                <div class="error-actions">
                                    <a href="#" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                        Take Me Home </a><a href="http://www.jquery2dotnet.com" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Contact Support </a>
                                </div>
                            </div>
                        </div>
                         </div>`
        padre.appendChild(div)
        setTimeout(()=>{div.remove(), location.reload() },2000)
    }

}

amazingEventsWeb()

