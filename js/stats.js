async function amazingStats() {

    const apiAmazingEvents = await fetch("https://amazing-events.herokuapp.com/api/events");
    console.log(apiAmazingEvents) // esta es la respuesta
    let myData = await apiAmazingEvents.json() // method que hace un read del response
    // un array de objetos ✔️
    let eventos = myData.events
    // fecha de referencia ✔️
    let fechaReferencia = myData.currentDate

    let eventosAsistencia = eventos.filter(e => e.assistance > 0).sort((a, b) => {
        return (parseInt(a.assistance) / parseInt(a.capacity)) - (parseInt(b.assistance) / parseInt(b.capacity))

    })

    let eventosCapacidad = eventos.filter(e => e.capacity > 0).sort((a, b) => {
        return parseInt(a.capacity) - parseInt(b.capacity)
    })

    //------------------------------------------------------------------------------
    let UpcomingCalculo = eventos.filter(e => e.estimate > 0 && !e.assistance) //20

    let pastCalculo = eventos.filter(e => e.assistance > 0 && !e.estimate) //30


    const categorias = filtrarCategory() // categoriasUp 6 categorias !food fair

    const categoriasPast = filtrarCategoryPast() // categoriasUp 7 categorias


    function filtraUpRevenues(array, categories) {

        let newArray = []//1,2,3

        for (let index = 0; index < categories.length; index++) {
            let categoria = categories[index]
            //variables aux
            let revenues = 0
            let percentage = 0
            let cantidad = 0
            // por cada vuelta 1,2,3,4,5,6 suma todos / cantidad total = 6
            for (let i = 0; i < array.length; i++) {
                if (array[i].category === categoria) {

                    revenues = revenues + (parseInt(array[i].price) * parseInt(array[i].estimate))

                    percentage += parseInt(array[i].estimate) / parseInt(array[i].capacity) * 100

                    cantidad += 1
                }
            }

            let obj = {
                category: categoria,
                revenues: revenues,
                percentage: percentage / cantidad,
            }
            newArray.push(obj)
        }
        return newArray
    }

    

    function filtraPastRevenues(array, categories) {
        let newArray = []

        for (let index = 0; index < categories.length; index++) {
            let categoria = categories[index]
            let revenues = 0
            let percentage = 0
            let cantidad = 0
            for (let i = 0; i < array.length; i++) {
                if (array[i].category === categoria) {

                    revenues += parseInt(array[i].price) * parseInt(array[i].assistance)

                    percentage += parseInt(array[i].assistance) / parseInt(array[i].capacity) * 100

                    cantidad += 1
                }

            }
            let obj = {
                category: categoria,
                revenues: revenues,
                percentage: percentage / cantidad,

            }

            newArray.push(obj)
        }

        return newArray


    }


    

    UpcomingCalculo.forEach((e) => {
        let name = e.name
        let cat = e.category
        let calculo = e.estimate * e.price

    })

    function filtrarCategoryPast() {
        let arrayCategoriasData = [];
        pastCalculo.map(e => {
            arrayCategoriasData.push(e.category)
        })
        let arrayCategorias = arrayCategoriasData.filter((cat, i) => {
            return arrayCategoriasData.indexOf(cat) === i;
        })
        return arrayCategorias;
    }

    function filtrarCategory() {
        let arrayCategoriasData = [];
        UpcomingCalculo.map(e => {
            arrayCategoriasData.push(e.category)
        })
        let arrayCategorias = arrayCategoriasData.filter((cat, i) => {
            return arrayCategoriasData.indexOf(cat) === i;
        })
        return arrayCategorias;
    }

    const hAttendance = document.getElementById("h-attendance")
    const lAttendance = document.getElementById("l-attendance")
    const hCapacity = document.getElementById("h-capacity")

    hAttendance.innerText = eventosAsistencia[eventosAsistencia.length - 1].name

    lAttendance.innerText = eventosAsistencia[0].name

    hCapacity.innerText = eventosCapacidad[eventosCapacidad.length - 1].name

    const arrayPastStats = filtraPastRevenues(pastCalculo, categoriasPast)
    const arrayUpStats = filtraUpRevenues(UpcomingCalculo, categorias)

    console.log(arrayPastStats)
    console.log(arrayUpStats)

    function createStats(array, div) {
        let containerStats = document.getElementById(div)
        array.forEach(e => {
            let filas = document.createElement("tr")
            filas.innerHTML = `                  
                                <td class="tg-0pky"> ${e.category} </td>
                                <td class="tg-0pky">${e.revenues}</td>
                                <td class="tg-0pky">${ parseFloat(e.percentage) }</td>`
            containerStats.appendChild(filas)
        });
    }

    createStats(arrayUpStats,"upStats")
    createStats(arrayPastStats,"pastStats")

}

amazingStats()

