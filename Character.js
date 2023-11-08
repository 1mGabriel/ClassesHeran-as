class Character{
    constructor(nameCharacter,hp,ad,def){
        this.nameCharacter = nameCharacter
        this.hp = hp
        this.ad = ad
        this.def = def
    }
    atack(target /*instacia*/){
    return `Causou ${this.ad - target.def} de dano em ${target.nameCharacter}`
    }
}
module.exports = Character