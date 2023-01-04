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
    getDogHtml(){
        const {name, age, bio} = this
        return `
            <div class="dog" id="dog">
                <p class="name">${name}, ${age}</p>
                <p class="desc">${bio}</p>
            </div>
        `
        
    }
    setDogAvatar(){
        document.getElementById("dog").style.backgroundImage = `url(${this.avatar})`
    }
}

export default Dog