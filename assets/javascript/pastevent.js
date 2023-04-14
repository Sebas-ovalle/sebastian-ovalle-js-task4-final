import {nuevoArcontent,showTemplate,imprimirOptions,filterForCategory,filterForText,filtroCross} from "../javascript/module/funtionsPastEvent.js"

const $contenedor = document.getElementById (`contenedor-3`);//aca recupere el contenedor de las cards

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
  
  const upcoming = inpCart(events)

  showTemplate (upcoming, $contenedor)


  imprimirOptions (arrayCategories, $inpContainer )
  
  $inpContainer.addEventListener("change", () =>{
  
    let checkSelector = [...document.querySelectorAll(`input[type = "checkbox"]:checked`)].map(check => check.id)
    
    const carFilterx = filtroCross(upcoming, checkSelector, $searchImp.value )
      
    showTemplate(carFilterx, $contenedor)
    
  })
    
  $searchImp.addEventListener("input", () =>{
    let checkSelector = [...document.querySelectorAll(`input[type = "checkbox"]:checked`)].map(check => check.id)
    
    const carFilterx = filtroCross(upcoming, checkSelector, $searchImp.value )
    
    showTemplate(carFilterx, $contenedor)
  })

  function inpCart (newEvenet){
    let contenidos = []                                    
  for (let contenido of newEvenet){ // aca filtro las fechas correspondientes a evento pasado
      if (contenido.date <= "2023-03-10"){ // aca lo mismo que upcoming pero invertido
          contenidos.push(contenido)
         }
         
  }
  return contenidos
  }


})
