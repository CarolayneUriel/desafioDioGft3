class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    

    atacar(){
        if(this.tipo === "mago"){
            console.log(`o ${this.nome} é do tipo ${this.tipo} e atacou usando magia`)
        }
        else if(this.tipo === "guerreiro"){
            console.log(`O ${this.nome} é do tipo ${this.tipo} e atacou usando uma espada`)
        }
        else if(this.tipo === "ninja"){
            console.log(`O ${this.nome} é do tipo ${this.tipo} e atacou usando uma shuriken`)
        }
        else if (this.tipo === "monge") {
            console.log(`O ${this.nome} é do tipo ${this.tipo} e atacou usando artes marciais`)
        }
        else{
            console.log(`O ${this.nome} é do tipo ${this.tipo} e atacou usando métodos desconhecidos`) 
        }
    }
}

let mago = new heroi("Mestre dos Magos", 28, "mago")
let monge = new heroi("Nhat", 18, "monge")
let guerreiro = new heroi("Ichigo", 20, "guerreiro")
let ninja = new heroi("Jack", 20, "ninja")

mago.atacar()
monge.atacar()
guerreiro.atacar()
ninja.atacar()