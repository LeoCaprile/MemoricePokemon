import '../css/componentes.css';
import {btnplay,initTime} from './botones.menu'
import {set} from '../index'


const cardbox = document.querySelector('#cards-box')
const time = document.querySelector('.time')
const modal = document.querySelector('.modal')
const blockscroll = document.querySelector('html')
const btnModal = document.querySelector('#btn-modal')

let endTime, totalTime;


export const createCardHTML=(card)=>{

const cardHTML = 

`<div class="card-container">   
<div card-id="${card.couple}" id="${card.id}" class="card">
    <figure class="back"><img src="./assets/00${card.id}-avatar.svg"></figure>
    <figure class="front"><img src="./assets/038-gaming.svg"></figure>
</div>
</div>`

const div = document.createElement('div');
div.innerHTML = cardHTML;
cardbox.append(div.firstElementChild)


}


export function winGame(){

    endTime = getTime();
    totalTime = endTime - initTime;
    time.innerText=calcTime(totalTime);

    modal.classList.add('is-active');
    blockscroll.classList.add('is-clipped')

}

btnModal.addEventListener('click', ()=>{
  
  modal.classList.remove('is-active');
  blockscroll.classList.remove('is-clipped')
  btnplay.classList.toggle('is-static')
  const card = document.querySelectorAll('.card-container')
  card.forEach(card => card.remove())
  set.setClear()
})


export function getTime(){

    return new Date().getTime()
    
}

export function calcTime(time){

let seconds       = Math.floor(time/1000),
    minutes       = Math.floor((time/(1000*60))),
    hours         =0;

if(seconds>59){
  minutes = Math.floor(seconds/60)
  seconds = seconds%60
}
if(minutes>59){
  hours = Math.floor(minutes/60)
  minutes = minutes%60
}
seconds = (seconds >= 10) ? seconds : "0" + seconds;
minutes = (minutes >= 10) ? minutes : "0" + minutes;
hours = (hours<=0)? '':hours+':';

return hours+minutes+':'+seconds;

}
