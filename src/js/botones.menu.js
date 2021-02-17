import {set} from '../index'
import {createCardHTML, getTime} from './componentes'

const selectSize = document.querySelector('.puzzle-size')
let puzzleSize;

export let initTime;
export const btnplay = document.querySelector('#btn-play')


selectSize.addEventListener('change',(e)=>{
    puzzleSize = parseInt(e.target.value)
})


btnplay.addEventListener('click', pressPlay)

function pressPlay(){
    if(puzzleSize > 0){

        initTime = getTime();
        set.GetCards(puzzleSize);
        set.Shuffle();
        set.set.forEach(createCardHTML);
        set.flipCard()
        this.classList.toggle('is-static')
    }
    

}


