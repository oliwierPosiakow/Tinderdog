import dogs from './data.js'
import Dog from './Dog.js'

const dogsArray = new Array(dogs.length).map(() => {
    for(let dog of dogs){
        return dog
    }
})
console.log(dogsArray)

let dog1 = new Dog(dogs[0])
dog1.setDogHtml()

const getNextDog = () =>{
    const nextDogData = dogsArray.shift()
    console.log(nextDogData)
    return nextDogData
}

const render = () => {
    dog1 = getNextDog()
    dog1.setDogHtml()
}

document.getElementById('like').addEventListener('click', render())
