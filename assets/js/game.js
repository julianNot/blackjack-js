/**
 *  2C = Two of Clubs (Treboles)
 *  2D = Two of Diamons (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two of Spades (Espadas)
 */

let deck = []
let types = ['C','H','D','S']
let specials = ['A','J','Q','K']

const createDeck = () =>{
    for(let i = 2; i <= 10; i++){
        for (let type of types){
            deck.push( i + type)
        }
    }

    for( let type of types){
        for( let special of specials)
        deck.push(special + type )
    }
    console.log(deck)
    deck = _.shuffle(deck)
    console.log(deck)
    return deck
}

createDeck()