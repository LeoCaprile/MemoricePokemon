import '../css/componentes.css';
import {set} from '../index'
const cardbox = document.querySelector('#cards-box')



export const createCardHTML=(card)=>{

const cardHTML = 

`<div class="card-container">   
<div card-id="${card.couple}" class="card">
    <figure class="back"><img src="./assets/00${card.id}-avatar.svg"></figure>
    <figure class="front"><img src="./assets/038-gaming.svg"></figure>
</div>
</div>`

const div = document.createElement('div');
div.innerHTML = cardHTML;
cardbox.append(div.firstElementChild)


}

export const flipCard = () =>{

const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click',()=>{
        card.classList.toggle('flip')
        const id = card.getAttribute('card-id');
        set.isFliped(id)
      
    })
})



}