const $contentDescription = document.getElementById (`contentCardDesc`)
let urlParams 
let params  
let nameCart 
let cartfind
let events = []

const url = ` https://mindhub-xj03.onrender.com/api/amazing`
fetch (url)
.then(response => (response.json()))
.then(datos => {
    events = datos.events
    console.log(events)
    urlParams = location.search

    params = new URLSearchParams (urlParams)
    
    nameCart  = params.get('id')
    
    cartfind = events.find(card => card._id == nameCart )

    impCard(cartfind)
})

.catch(err => console.log(err))

function impCard (card){
    let templates = ""
    templates = `
        <div class="img-dis">
        <img src=${card.image}alt="...">
        </div>
        <div class="description-tag">
        <ul>
            <li>name:${card.name}</li>
            <li>date:${card.date}</li>
            <li>description:${card.description}</li>
            <li>category:${card.category}</li>
            <li>place:${card.place}</li>
            <li>capacity:${card.capacity}</li>
            <li>assistance:${card.assistance}</li>
            <li>price:${card.price}</li>
        </ul>
        </div>`
        $contentDescription.innerHTML = templates
}


