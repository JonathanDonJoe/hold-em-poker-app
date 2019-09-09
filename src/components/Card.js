import React from 'react';

function Card(props) {
    // console.log(props.card)
    const thisCard = `/cards/${props.card}.png`
    // console.log(thisCard)

    return(
        <div className='col-sm-2 card'>
            <img src={thisCard} alt={props.card}/>
        </div>
    )
}

export default Card;