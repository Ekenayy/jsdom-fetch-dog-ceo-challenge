const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function toggleColor (element) {
    let colorsArray = [
        '#6b6bfa', 
        '#fcb5fc',
        '#ddff99',
        '#ffff66', 
        '#fa6b6b',
    ]

    let randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    element.target.style.color = randomColor
    // debugger
    // if (element.target.style.backgroundColor === 'rgb(255, 255, 102)' || element.target.style.backgroundColor === "rgb(221, 255, 153)") {
    //     element.target.style.color = 'black'
    // } else {
    //     element.target.style.color = 'white'
    // }
 }

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
        // debugger
        li.addEventListener('click', (element) => {
            toggleColor(element)
        })
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