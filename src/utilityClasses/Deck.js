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

        for (let i = 0; i < 1000000; i++) {
            let rand1 = Math.floor(Math.random() * 52);
            let rand2 = Math.floor(Math.random() * 52);
            let temp = this.cards[rand1];
            this.cards[rand1] = this.cards[rand2];
            this.cards[rand2] = temp;
        }
    }
}

export default Deck;
