import React, { Component } from 'react';
import './PokerTable.css';
import PokerHand from './PokerHand';

class PokerTable extends Component {
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