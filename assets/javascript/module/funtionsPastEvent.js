
export function nuevoArcontent ( contenido ){ // aca edite la card con nuevos objetos sacadas de data eventos
    return `
    <div class="card p-2" style="width: 18rem;">
    <img src="${contenido.image}" class="card-img-top h-50" alt="...">
    <div class="card-body text-center mb-3">
    <h5 class="card-title">${contenido.name}</h5>
    <p class="card-text">${contenido.description}</p>
    </div>
    <footer class="footer-cards text-center">
    <p>Price:${contenido.price}</p>
    <a href="/assets/pages/details.html?id=${contenido._id}" class="btn text-center buttons-nav">Details</a>
    </footer>
    </div> 
`
}


export function showTemplate(listFilt, contFilt){
      let template = ``
  
      for(let contenido of listFilt){
          template += nuevoArcontent(contenido)
      }
      contFilt.innerHTML = template
     }
  
export function imprimirOptions (category, check){
 let template = ""
      for (let cate of category){
        template +=
        `<div class="form-check form-check-inline">
         <input class="form-check-input" type="checkbox" id="${cate}" value="${cate}">
         <label class="form-check-label" for="inlineCheckbox1">${cate}</label>
         </div>`
      }
      check.innerHTML += template
    }
  
    export function filterForCategory(listCarts, arrayCategories){
      if (arrayCategories.length == 0 ){
          return listCarts
      }
      return listCarts.filter(cart =>  arrayCategories.includes(cart.category))
    }
    
    // ACA FILTRO POR TEXTO QUE INGRESA EL USUARIO
    export function filterForText(listCarts, text){
    
      return listCarts.filter(cart => cart.name.toLowerCase().includes( text.toLowerCase() ) || cart.description.toLowerCase().includes( text.toLowerCase() ) )
    }
    // ACA FILTRO CRUZADO
    export function filtroCross ( events, catFil, nameText){
      const crossEvent = filterForCategory (events, catFil)
      const crossText = filterForText (crossEvent, nameText )
      
      return crossText
    }