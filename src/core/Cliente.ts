export default class Client {
    #id: string
    #name: string
    #age: number
    
    constructor (name: string, idade: number, id: string = null) {
        this.name = name
        this.age = age
        this.id = id
    }
    get id(){
        return this.id
    }
}