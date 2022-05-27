const dog = {
    sound:"barks",
    run:"yes"
}
const puki = Object.create(dog)
puki.name = "ruth"
puki.color = "red"

function golden(){
    const character={}
    character.dance = "yes"
    character.loyal = "yes"
    character.friendly = "yes"
    return character
}

function Kita(name,age) {
    this.name=name
    this.age = age
    
}
const res = new Kita("alfred",13)
console.log(golden())
//console.log(res)