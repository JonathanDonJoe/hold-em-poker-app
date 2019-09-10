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
            dealerHand: ['deck', 'deck'],
            playerHand: ['deck', 'deck'],
            communityHand: [],
            wager: 0, 
            bankroll: 100,
            msg:''
        }
    }

    prepDeck = () => {
        // const burn = this.deck.cards.shift();
        const card1 = this.deck.cards.shift();
        const card2 = this.deck.cards.shift();
        const card3 = this.deck.cards.shift();
        const card4 = this.deck.cards.shift();

        this.setState({
            dealerHand: [card1, card3],
            playerHand: [card2, card4]
        })
    }

    bet = (amount) => {
        const newWager = this.state.wager + amount;
        const newBankRoll = this.state.bankroll - amount;
        if (newBankRoll >= 0) {
            this.setState({
                wager:newWager,
                bankroll: newBankRoll
            })
        } else {
            this.setState({
                msg: "You don't have enough money!"
            }, this.clearMsg)
        }
    }

    clearMsg = () => {
        setTimeout( () => { this.setState({ msg: "" })}, 2000)
    }

    render() { 
        // console.log(this.state.dealerHand)
        // console.log(this.state.playerHand)
        // console.log(this.state.communityHand)
        return (
            <div className='the-table col-sm-12'> 
                <div className='col-sm-12 text-center the-numbers'>
                    <div className='col-sm-4 col-sm-offset-1'>
                        Current Pot: ${this.state.wager}
                    </div>
                    <div className='col-sm-4 col-sm-offset-2'>
                        Bankroll: ${this.state.bankroll}
                    </div>
                </div>
                <div className='player-message'>
                    {this.state.msg}
                </div>
                <h1>Dealer Hand:</h1>
                <PokerHand cards={this.state.dealerHand} />
                <h1>Community Hand:</h1>
                <PokerHand cards={this.state.communityHand} />
                <h1>Player Hand:</h1>
                <PokerHand cards={this.state.playerHand} />
                <div className='col-sm-12 buttons'>
                    <button onClick={this.prepDeck} className='btn btn-primary'>
                        Deal
                    </button>
                    <button onClick={() => {this.bet(5)}} className='btn btn-success'>
                        Bet 5
                    </button>
                    <button onClick={this.prepDeck} className='btn btn-warning'>
                        Check
                    </button>
                    <button onClick={this.prepDeck} className='btn btn-danger'>
                        Fold
                    </button>
                </div>
            </div>
        );
    }
}
 
export default PokerTable;