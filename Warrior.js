const Character = require('./Character')
class Warrior extends Character{
    constructor(shield,position,nameCharacter,hp,ad,def){
        super(nameCharacter,hp,ad,def)
        this.shield = shield
        this.position = null
    }
    atack(target){
        if(this.position == "atk" || this.position == null){
            return `Causou ${this.ad - target.def} de dano em ${target.nameCharacter}`    
        }if(this.position == "def"){
            
            return `${this.nameCharacter} não pode atacar em posição de Defesan alterne a posição para "atk"`
        }
    }
    chancePosition(){
        if(this.position == "atk" || this.position == null){
            this.position = "def"
            this.def += this.shield
            return `Posição alterada para Defesa`
        }if(this.position =="def"){
            this.position = "atk"
            return "Posição alterada para ataque"
        }
    }
    }
module.exports = Warrior