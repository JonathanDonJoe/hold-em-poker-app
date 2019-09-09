import React from 'react';
import Card from './Card';

function PokerHand(props) {
    // console.log(props.cards)
    let hand = props.cards.map( (cards, i) => {
        return(
            <Card key={i} card={cards} />
        )
    })

    return(
        <div className='poker-hand col-sm-12'>
            {hand}
        </div>
    )
}

export default PokerHand;