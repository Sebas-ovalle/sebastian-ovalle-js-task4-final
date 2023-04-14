import {newArcontent,inpCart,imprimirOptions,filterForCategory,filterForText,filtroCross} from "./module/funtionsHome.js"

const contenedor = document.getElementById (`contenedor-data`);//aca recupere el contenedor de las card

let events = []
const url = ` https://mindhub-xj03.onrender.com/api/amazing`
fetch (url)
.then(response => (response.json()))
.then(datos => {events = datos.events

const $inpContainer = document.getElementById(`cards-conte`);

const $searchImp = document.getElementById(`site-search`)

const categories = events.map(event => event.category)
const setCategories = new Set (categories)
const arrayCategories = Array.from(setCategories)

const listOfCategory = [...new Set (events.map(cart => cart.category))]

  imprimirOptions (arrayCategories, $inpContainer)

  inpCart (events, contenedor)
  $inpContainer.addEventListener("change", () =>{

    let checkSelector = [...document.querySelectorAll(`input[type = "checkbox"]:checked`)].map (check => check.id)
  
    const carFilterx = filtroCross(events, checkSelector, $searchImp.value )
    
    inpCart(carFilterx, contenedor)
  
  })
  
  $searchImp.addEventListener("input", () =>{
    let checkSelector = [...document.querySelectorAll(`input[type = "checkbox"]:checked`)].map (check => check.id)
  
    const carFilterx = filtroCross(events, checkSelector, $searchImp.value )
  
    inpCart(carFilterx, contenedor)
  })
  


})
.catch(err => console.log(err))

