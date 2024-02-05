document.addEventListener('DOMContentLoaded', function(){
    const cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H' ];

    const memoryGame = document.querySelector(' .memory-game');
    let flippedCards = [];
    let matchedCards = [];

    //funcion para mezclar las cartas al inicio
    function shuffleCards(){
        cards.sort(()  => Math.random() - 0.5);
    }

    //funcion para crear las cartas y añador eventos de click
    function createCards (){
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.value = cards[i];
            card.addEventListener('click', flipCard);
            memoryGame.appendChild(card);
            
        }
    }


    //funcion para voltear la carta
    function flipCard(){
        if(flippedCards.length < 2){
            this.textContent = this.dataset.value;
            this.classList.add('flipped')
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    }

    //funcion para verificar si las cartas coinciden
    function checkMatch() {
        const  [card1, card2] = flippedCards;
        if (card1.dataset.value === card2.dataset.value){
            matchedCards.push(card1,card2);

            if (matchedCards.length === cards.length) {
                alert('¡Felicidades! You Win')
            }
        } else{
            card1.textContent = '';
            card2.textContent = '';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }
        flippedCards = [];
    }

    //INICIAR EL JUEGO
    shuffleCards();
    createCards();
}) 