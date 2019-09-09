import React from 'react';
import Card from './Card';

function PokerHand(props) {


    return(
        <div className='poker-hand col-sm-12'>
            <Card />
            <Card />
        </div>
    )
}

export default PokerHand;