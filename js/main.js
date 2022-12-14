const titleSite = document.title;
const loading = "Cargando...";
const containerCategory = "category-container";
const searchButton = document.getElementById("search");
const inputSearch = document.getElementById("form-search");
const checkArea = document.getElementById("category-container");
// import { data } from "./data";

//------------------------------ ✖️ ✔️

async function amazingEventsWeb() {
    const data = {
        "currentDate": "2022-01-01",
        "events": [
          {
            _id: 1,
            "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            "name":"Collectivities Party",
            "date":"2021-12-12",
            "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category":"Food Fair",
            "place":"Room A",
            "capacity":45000,
            "assistance":42756,
            "price":5
          },
          {
            _id: 2,
            "image":"https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            "name":"Korean style",
            "date":"2022-08-12",
            "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category":"Food Fair",
            "place":"Room A",
            "capacity":45000,
            "assistance":42756,
            "price":10
          },
          {
            _id: 3,
            "image":"https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            "name":"Jurassic Park",
            "date":"2021-11-02",
            "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category":"Museum",
            "place":"Field",
            "capacity":82000,
            "assistance":65892,
            "price":15
          },
          {
            _id: 4,
            "image":"https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            "name":"Parisian Museum",
            "date":"2022-11-02",
            "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
            "category":"Museum",
            "place":"Paris",
            "capacity":8200,
            "estimate":8200,
            "price":3500
          },
          {
            _id: 5,
            "image":"https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            "name":"Comicon",
            "date":"2021-02-12",
            "description":"For comic lovers, all your favourite characters gathered in one place.",
            "category":"Costume Party",
            "place":"Room C",
            "capacity":120000,
            "assistance":110000,
            "price":54
          },
          {
            _id: 6,
            "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            "name":"Halloween Night",
            "date":"2022-02-12",
            "description":"Come with your scariest costume and win incredible prizes.",
            "category":"Costume Party",
            "place":"Room C",
            "capacity":12000,
            "estimate":9000,
            "price":12
          },
          {
            _id: 7,
            "image":"https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            "name":"Metallica in concert",
            "date":"2022-01-22",
            "description":"The only concert of the most emblematic band in the world.",
            "category":"Music Concert",
            "place":"Room A"
            ,"capacity":138000,
            "estimate":138000,
            "price":150
          },
          {
            _id: 8,
            "image":"https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            "name":"Electronic Fest",
            "date":"2021-01-22",
            "description":"The best national and international DJs gathered in one place.",
            "category":"Music Concert",
            "place":"Room A",
            "capacity":138000,
            "assistance":110300,
            "price":250
            },
          {
            _id: 9,
            "image":"https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            "name":"10K for life",
            "date":"2021-03-01",
            "description":"Come and exercise, improve your health and lifestyle.",
            "category":"Race",
            "place":"Soccer field",
            "capacity":30000,
            "assistance":25698,
            "price":3
          },
          {
            _id: 10,
            "image":"https://i.postimg.cc/zv67r65z/15kny.jpg",
            "name":"15K NY",
            "date":"2022-03-01",
            "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category":"Race",
            "place":"New York",
            "capacity":3000000,
            "assistance":2569800,
            "price":3
            },
          {
            _id: 11,
            "image":"https://i.postimg.cc/Sst763n6/book1.jpg",
            "name":"School's book fair",
            "date":"2022-10-15",
            "description":"Bring your unused school book and take the one you need.",
            "category":"Book Exchange",
            "place":"Room D1",
            "capacity":150000,
            "estimate":123286,
            "price":1
          },
          {
            _id: 12,
            "image":"https://i.postimg.cc/05FhxHVK/book4.jpg",
            "name":"Just for your kitchen",
            "date":"2021-11-09",
            "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category":"Book Exchange",
            "place":"Room D6",
            "capacity":130000,
            "assistance":90000,
            "price":100
          },
          {
            _id: 13,
            "image":"https://i.postimg.cc/vH52y81C/cinema4.jpg",
            "name":"Batman",
            "date":"2021-3-11",
            "description":"Come see Batman fight crime in Gotham City.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":11000,
            "assistance":9300,
            "price":225
          },
          {
            _id: 14,
            "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
            "name":"Avengers",
            "date":"2022-10-15",
            "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":9000,
            "estimate":9000,
            "price":250
          }
        ]
      }

      console.log(data)
  let eventos = data.events;

  // fecha de referencia ✔️
  let fechaReferencia = data.currentDate;
  console.log(fechaReferencia);

  {
    titleSite === "Amazing Events"
      ? createCards(eventos, "card-container")
      : loading;
  }



  // listener del los checkbox
  checkArea.addEventListener("change", () => {
    let filteredCat = amazingChecks(eventos);
    let filteredCards = filterCardsBySearch(filteredCat, inputSearch.value);
    createCards(filteredCards, "card-container");
  });

  //listener del inputSearch
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let filteredCards = filterCardsBySearch(eventos, inputSearch.value);
    let filteredCat = amazingChecks(filteredCards);
    createCards(filteredCat, "card-container");
  });

  // Crear categorias
  function creatCategory(array, divForm) {
    array.forEach((cat) => {
      let containerForm = document.getElementById(divForm);
      let categorias = document.createElement("div");
      categorias.className = "form-check";
      categorias.innerHTML = `<label class="form-check-label cat-buttons" for="${cat}">
         ${cat}
         <input name="${cat}" class="form-check-input" type="checkbox" value="${cat}"
             id="${cat}">
         </label>`;
      containerForm.appendChild(categorias);
      return cat;
    });
  }

  function filtrarCategory() {
    let arrayCategoriasData = [];
    eventos.map((e) => {
      arrayCategoriasData.push(e.category);
    });
    let arrayCategorias = arrayCategoriasData.filter((cat, i) => {
      return arrayCategoriasData.indexOf(cat) === i;
    });
    return arrayCategorias;
  }

  // Crear Cards
  function createCards(amazing, container) {
    let containerAbuelo = document.getElementById(container);
    containerAbuelo.innerHTML = "";
    //
    amazing.forEach((e) => {
      let eventos = document.createElement("div");
      eventos.className = "profile-card-4 text-center";
      eventos.innerHTML = `<img src=${e.image} class="img" alt="img-card" >
              <div class="profile-content">                        
                  <div class="row align-items-center ">
                      <div class="col-xs-4">
                          <div class="profile-overview">
                              <h4>${e.name}</h4>
                             <p>${e.category}</p>
                          </div>
                      </div>
                      <div class="d-flex justify-content-around align-items-center">
                          <div class="profile-overview pb-4">
                              <h4>Price: $ ${e.price}</h4>
                         </div>
                              <a class="text-decoration-none btn-see" href="./pages/details.html?id=${e._id}">See-more...</a>
                      </div>
                 </div>
             </div>`;
      containerAbuelo.appendChild(eventos);
    });
  }
  
  creatCategory(filtrarCategory(), containerCategory);

  function amazingChecks(amazing) {
    //array de categorias de checkbox
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    let checkboxesChecked = Array.from(checkboxes)
      .filter((check) => check.checked)
      .map((e) => e.value);
    if (checkboxesChecked.length > 0) {
      let filteredCheckBox = amazing.filter((e) =>
        checkboxesChecked.includes(e.category)
      );
      return filteredCheckBox;
    }
    return amazing;
  }

  //-- por boton de categoria Ya esta funcion no es necesaria linea 109
  function filterCards(amazing, check) {
    let cardsFiltradas = amazing.filter((e) => check.includes(e.category));
    return cardsFiltradas;
  }

  //                           arrayDB, textUsuario[]
  function filterCardsBySearch(amazing, textoSearch) {
    let cardsfiltradasporcategoria = amazing.filter((e) =>
      e.name.toLowerCase().includes(textoSearch.toLowerCase())
    );

    if (cardsfiltradasporcategoria.length == 0) {
      noFound(textoSearch);
      return [];
    }
    return cardsfiltradasporcategoria;
  }

  function noFound(textoSearch) {
    let padre = document.getElementById("no-found");
    let div = document.createElement("div");
    div.className =
      "container d-flex d-flex justify-content-center contact-div py-5";
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
                         </div>`;
    padre.appendChild(div);
    setTimeout(() => {
      div.remove(), location.reload();
    }, 2000);
  }
}

amazingEventsWeb();
