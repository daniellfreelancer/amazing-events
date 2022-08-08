
const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function amazingDetail(){

    const apiAmazingEvents = await fetch("https://amazing-events.herokuapp.com/api/events");
    console.log(apiAmazingEvents) // esta es la respuesta
    let myData = await apiAmazingEvents.json() // method que hace un read del response
    // un array de objetos ✔️
    let eventos = myData.events
    // fecha de referencia ✔️
    let fechaReferencia =  myData.currentDate
    //creo mi filtro en forma de array por id
    let details = eventos.find(e => e._id === id);

    // funciones crea details y title details
    function createDetails(amazing,container){

        let detailDiv = document.getElementById(container);
    
        let detailCard = document.createElement("div");
    
            detailCard.className = "div-detail contact-div"
            detailCard.innerHTML = `<img class="img-detail rounded-2" src="${amazing.image}" alt="">
                                        <div class="text-detail col m-5 contact-div ">
                                        <div>
                                        
                                        <div>
                                            <div class="d-flex justify-content-between mb-3">
                                            <div class="profile-overview">
                                                <h4>${amazing.name}</h4>
                                                <p>COD: ${amazing._id} </p>
                                            </div>
                                        </div>
                                        <div class="">
                                                <p>${amazing.description}</p>
                                        </div>
    
                                        <div class="d-flex justify-content-between mb-3" >
                                            <div class="profile-overview">
                                                <h4>CATEGORY</h4>
                                            </div>
                                            <div class="profile-overview">
                                                <h4>${amazing.category}</h4>
                                            </div>
                                        </div>
    
                                        <div class="d-flex justify-content-between mb-3" >
                                            <div class="profile-overview">
                                                <h4>PLACE: ${amazing.place} </h4>
                                            </div>
                                            <div class="profile-overview">
                                                <h4>CAPACITY: ${amazing.capacity} </h4>
                                            </div>
                                        </div>
    
                                        <div class="d-flex justify-content-between mb-3" >
                                            <div class=" mb-3">
                                                <div class="profile-overview">
                                                    <h4>ASSISTANCE OR ESTIMATE: ${amazing.assistance ? amazing.assistance : amazing.estimate }</h4>
                                                </div>
                                            </div>
                                            <div class=" mb-3" >
                                                <div class="profile-overview">
                                                    <h4>PRICE: $ ${amazing.price} </h4>
                                                </div>
                                            </div>
                                        </div>
                                        </div>`
                                        
        detailDiv.appendChild(detailCard)
    }
    
    function createTitleDetail(amazing, container){
        let detailDiv = document.getElementById(container);
        let titleP = document.createElement("p");
        titleP.className = "event-name fs-1 ";
        titleP.innerHTML = `${amazing.name}`
        detailDiv.appendChild(titleP)
    }
    
    createDetails(details, "container-detail")
    createTitleDetail(details,"tittle-details")
    
}

amazingDetail()