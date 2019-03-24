document.addEventListener('DOMContentLoaded', function (){
renderAllDogs()
})

function renderAllDogs(){
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(function(puppy){
        const dogBar = document.getElementById("dog-bar")
        const puppySpan = document.createElement('span')
        puppySpan.dataset.id = puppy.id
        puppySpan.textContent = puppy.name
        puppySpan.addEventListener('click', handlePuppyInfo)
        dogBar.appendChild(puppySpan)
        })
    })
}

function handlePuppyInfo (dog) {
    // I need to get the dog that i click on to show up
    // in the dog-info tab. I thought about doing a fetch (below)
    // but I don't know where to go from there??
    //fetch(`http://localhost:3000/pups${dog}`)
   // .then(resp => resp.json())

    const dogInfo = document.getElementById("dog-info")
    const h2 = document.createElement('h2')
    h2.textContent = dog.name
    const puppyImage = document.createElement('img')
    puppyImage.src = dog.image
    dogInfo.appendChild(h2)
    dogInfo.appendChild(puppyImage)

}



