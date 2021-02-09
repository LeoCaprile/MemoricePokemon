import {Card,SetOfCards} from './classes/index';
import './styles.css';
import './css/componentes.css'
import './js/botones.menu'

const Set = new SetOfCards();
const card = new Card('hola')


Set.GetCards(card)


console.log(Set)