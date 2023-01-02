// Create the Dog class here

class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    setLiked(){
        this.hasBeenLiked = true
    }
    setSwiped(){
        this.hasBeenSwiped = true
    }
    setDogHtml(){
        const {name, avatar, age, bio} = this
        document.getElementById("dog-el").innerHTML = `
            <div class="dog" id="dog">
                <p class="name">${name}, ${age}</p>
                <p class="desc">${bio}</p>
            </div>
        `
        document.getElementById("dog").style.backgroundImage = `url(${avatar})`
    }
}

export default Dog