import {Card,SetOfCards} from './classes/index';
import {createCardHTML,flipCard} from './js/componentes'
import './styles.css';
import './css/componentes.css'
import './js/botones.menu'

export const set = new SetOfCards();

set.GetCards(8);

set.Shuffle();

set.set.forEach(createCardHTML);

set.flipCard()
