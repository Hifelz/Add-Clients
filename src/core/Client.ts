export default class Client {
    #id: string
    #name: string
    #age: number
    
    constructor (name: string, idade: number, id: string = null) {
        this.name = name
        this.age = age
        this.id = id
    }
    
    static vazio () {
        return new Cliente ('', 0)
    }
    get id(){
        return this.#id
    }
    get name(){
        return this.#name
    }
    get age(){
        return this.#age
    }
}