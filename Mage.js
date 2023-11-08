const Character = require('./Character')
class Mage extends Character{
    constructor(ap,nameCharacter,hp,ad,def){
        super(nameCharacter,hp,ad,def)
        this.ap = ap
    }
    atack(target){
        return `Casou ${this.ad + this.ap - target.def} de dano em ${target.nameCharacter} `
    }
    heal(target){
        return `Curou ${target.nameCharacter} em ${this.ap*2} pontos de vida`
    }
}
module.exports = Mage