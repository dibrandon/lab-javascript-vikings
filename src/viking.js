// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(num){
    this.health -= num
  }
}



// Viking
class Viking extends Soldier{
  constructor (namePNJ, health, strength,){
    super(health, strength);
    this.name = namePNJ;
  }
  receiveDamage(num){
    this.health -= num;
    if(this.health > 0){
      return `${this.name} has received ${num} points of damage`
    }else{ 
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

//  class Square extends Rectangle {
//    constructor(widthParam, zHeihthParam) {
//      construc local
//      super(widthParam, widthParam); //constriuctor padre.
//      this.z = zHeihthParam;
//    }
//  }

// Saxon
class Saxon extends Soldier{
  constructor (health, strength){
    super(health, strength);
  }  
  receiveDamage(num){
    this.health -= num;
    if(this.health > 0){
      return `A Saxon has received ${num} points of damage`
    }else{ 
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
