import { Card } from "."

export class SetOfCards{

    constructor(){
        this.set = []
    }

    GetCards(cant){
        for(let i=1; i<cant ; i++){
            this.set.push(new Card(i,'a'))
            this.set.push(new Card(i,'b'))
        }
        
    }

    isFliped(id){
        for (const card of this.set){

            if(card.couple === id)
            card.isfliped = !card.isfliped
            
        }
    }
}