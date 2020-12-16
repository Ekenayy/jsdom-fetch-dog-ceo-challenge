const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

let renderImage = (data) => {
    const imgDiv = document.querySelector('#dog-image-container')
    // ul = document.createElement('ul')

    // ul.classList.add('image-list')

    // imgDiv.append(ul)
    // li.append(ul)
    // debugger

    data.forEach( (image) => {
        img = document.createElement('img')
        img.src = image
        img.width="700" 
        img.height="600"
        imgDiv.append(img)
    })
}

let renderBreed = (data) => {
    const ul = document.querySelector('#dog-breeds')
            

    data.forEach((breed) => {
        li = document.createElement('li')
        li.textContent = breed
        ul.append(li)
    })

}

window.addEventListener('load', fetch(imgUrl)
       .then(response => response.json()) 
       .then(data => {
           renderImage(data.message)
       })
)

window.addEventListener('load', fetch(breedUrl)
       .then(response => response.json()) 
       .then(data => {
           renderBreed(Object.keys(data.message))
       })
)





// function getBreed(url) {
//  fetch(url)
//     .then(response => response.json())
//     .then(data => {

//     })
// }

// fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       renderPokemon(data);
//     });