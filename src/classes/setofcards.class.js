import { Card } from "."
import { set } from ".."
import { flipCard } from "../js/componentes"

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

Shuffle(){

        this.set.sort((a,b)=> 0.5 - Math.random())

    }

flipCard(){
    
    const cards = document.querySelectorAll('.card')

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard(){
        
        if(lockBoard)return;
        if(this === firstCard)return;

        this.classList.toggle('flip')
        
        if(!hasFlippedCard){
            hasFlippedCard = true;
            firstCard = this;
        } else {
            
            secondCard = this;
            isMatch();
        }
        
    }

    function isMatch(){

        let isMatch = firstCard.id === secondCard.id;
        
        isMatch ? disableCards():unflipCards();   
        
    }

    function disableCards(){

        firstCard.removeEventListener('click',flipCard)
        secondCard.removeEventListener('click',flipCard)
        resetBoard();
    }

    function unflipCards(){

        lockBoard = true;

        setTimeout(() => {

            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard()
        }, 1500);
        
    }
    function resetBoard(){
        [hasFlippedCard,lockBoard] = [false,false];
        [firstCard,secondCard] = [null,null];

    }

    cards.forEach(card => card.addEventListener('click', flipCard))

    }

}