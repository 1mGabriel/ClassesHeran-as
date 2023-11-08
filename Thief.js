const Character = require('./Character')
class Thief extends Character{
    constructor(nameCharacter,hp,ad,def){
        super(nameCharacter,hp,ad,def)
    }
    atack(target){
        return ` Causou ${(this.ad - target.def) * 2} de dano em ${target.nameCharacter}`
    }
}
module.exports = Thief
