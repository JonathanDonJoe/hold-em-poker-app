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
        // console.log(this.deck.cards)
        this.state = {
            player1Hand: [],
            player2Hand: [],
            communityHand: []
        }
    }

    prepDeck = () => {
        // const burn = this.deck.cards.shift();
        const card1 = this.deck.cards.shift();
        const card2 = this.deck.cards.shift();
        const card3 = this.deck.cards.shift();
        const card4 = this.deck.cards.shift();

        this.setState({
            player1Hand: [card1, card3],
            player2Hand: [card2, card4]
        })
    }

    render() { 
        // console.log(this.state.player1Hand)
        // console.log(this.state.player2Hand)
        // console.log(this.state.communityHand)
        return (
            <div className='the-table col-sm-12'> 
                <h1>Player 1 Hand:</h1>
                <PokerHand cards={this.state.player1Hand} />
                <h1>Community Hand:</h1>
                <PokerHand cards={this.state.communityHand} />
                <h1>Player 2 Hand:</h1>
                <PokerHand cards={this.state.player2Hand} />
                <button onClick={this.prepDeck} className='btn btn-primary'>
                    Start
                </button>
            </div>
        );
    }
}
 
export default PokerTable;