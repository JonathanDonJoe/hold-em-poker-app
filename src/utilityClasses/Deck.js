class Deck{
    constructor() {
        this.cards = [];
    }

    create() {
        console.log('Creating Deck');
        
        const suits = ['h', 's', 'd', 'c']
        suits.forEach( suit => {
            for (let c = 1; c <= 13; c++) {
                this.cards.push(c+suit);
            }
        })
    }
    
    shuffle() {
        console.log('Shuffling Deck');
    
    }

}

export default Deck;
