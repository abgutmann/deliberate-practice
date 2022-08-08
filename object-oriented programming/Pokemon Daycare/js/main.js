//OBJECTIVE: (1) Create a Pokemon Daycare Simulator 
//           (2) Practice OOP - Classes, extend, super, looping, 4 pillars of OOP...
//RESOURCES: Bulbapedia - "Pokemon Breeding" article - https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_breeding#How_to_breed
//           Bulbapedia - "Egg Groups" article - https://bulbapedia.bulbagarden.net/wiki/Egg_Group

// Two Pokémon are compatible if they are of the same species (or share at least one Egg Group) and are of opposite genders. 
// Alternatively, breeding is usually still possible as long as one of them is Ditto, even if the other parent is gender unknown (such as Magnemite), and in fact, gender-unknown Pokémon can breed only with Ditto. 
// Pokémon in the No Eggs Discovered egg group cannot breed in any way whatsoever, and Ditto cannot breed with itself.

class Pokemon {
    // Properties
    constructor(pokemon, nickname, trainer, sex, eggGroup, level) {
        this._pokemon = pokemon
        this._nickname = nickname
        this._trainer = trainer
        this._sex = sex
        this._eggGroup = eggGroup
        this._level = level
    }
    // Methods
    speak() {
        console.log(`${this._pokemon} makes a sound.`)
    }
    // Getters
    get pokemon() {
        return this._pokemon
    }
    get nickname() {
        return this._nickname
    }
    get trainer() {
        return this._trainer
    }
    get sex() {
        return this._sex
    }
    get eggGroup() {
        return this._eggGroup
    }
    get level() {
        return this._level
    }
} 

// Pokemon
let pikachu = new Pokemon("Pikachu", "Pika", "Ash Ketchum", "male", ["field", "fairy"], 14)
let vulpix = new Pokemon("Vulpix", "Vulpix", "Amanda", "female", ["field"], 12)

let pokemonDaycare = {
    // Properties
    // Methods
    
}