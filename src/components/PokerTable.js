import React, { Component } from 'react';
import './PokerTable.css';
import PokerHand from './PokerHand';
import Deck from '../utilityClasses/Deck';

class PokerTable extends Component {
    constructor() {
        super();
        this.deck = new Deck();
        this.deck.create();
        this.deck.shuffle();
        console.log(this.deck.cards)
    }

    render() { 
        return (
            <div className='the-table col-sm-12'> 
                <PokerHand />
                <PokerHand />
                <PokerHand />
            </div>
        );
    }
}
 
export default PokerTable;