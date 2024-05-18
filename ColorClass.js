class ColorClass{
    #title
    #imageUrl

    constructor(title,imageUrl){
        this.#title=title
        this.#imageUrl=imageUrl
    }

    get title(){
        return this.#title
    }

    get imageUrl(){
        return this.#imageUrl
    }

    set title(newTitle){
        this.#title=newTitle
    }

    set imageUrl(newImageUrl){
        this.#imageUrl=newImageUrl
    }
}