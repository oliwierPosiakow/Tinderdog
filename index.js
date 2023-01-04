import dogs from './data.js'
import Dog from './Dog.js'

const likedBadge = document.getElementById("likedEl")
const nopeBadge = document.getElementById("nopeEl")
let isWaiting = false

let dogsArray = Array.from(dogs)

const getNextDog = () => {

    const nextDogData = dogsArray.shift()
    return new Dog(nextDogData)
}

const render = () => {
    document.getElementById('dog-el').innerHTML = dog1.getDogHtml()
    dog1.setDogAvatar()
}

let dog1 = getNextDog()

render()

document.getElementById('like').addEventListener('click', () => {
    if(!isWaiting){

        console.log(dogsArray)
        
        likedBadge.classList.toggle("visible")
        if(dogsArray.length > 0){
            dog1 = getNextDog()
        }
        else if (dogsArray.length === 0){
            dogsArray = Array.from(dogs)
            dog1 = getNextDog()
        }
        isWaiting = true
        setTimeout(()=>{
            likedBadge.classList.toggle("visible")
            render()
            isWaiting = false
        },1200)
    }
})

document.getElementById('nope').addEventListener('click', () => {
    if(!isWaiting){

        nopeBadge.classList.toggle("visible")
        if(dogsArray.length > 0){
            dog1 = getNextDog()
        }
        else if (dogsArray.length === 0){
            dogsArray = Array.from(dogs)
            dog1 = getNextDog()
        }
        isWaiting = true
        setTimeout(()=>{
            nopeBadge.classList.toggle("visible")
            render()
            isWaiting = false
        },1200)
    }
    
})

