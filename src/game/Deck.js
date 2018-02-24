
export default class Deck {
    constructor() {
        this.state = {
           deck_of_cards: this.shuffleDeck(this.createDeck())
        }
    }

    dealCard(is_face_up=false) {
        /**
         * Pop a card from the deck - this way we can be sure that the deck
         * will have the correct number of cards remaining and this makes the deal
         * mechanism easy - we simply dealCard() into the players card stack.
         */
        let card = this.state.deck_of_cards.shift();
        card.is_face_up = is_face_up;
        return card;
    }

    createDeck() {
        let cardSeries = 13;
        let suitStack, cardDeck = [];
        ["heart","diamond","club","spade"].forEach((suit) => {
            for (let i=1;i<=cardSeries;i++) {
                let cardIdentity = i;
                /**
                 * Friendly naming conventions.
                 */
                switch (i) {
                    case 1: cardIdentity = "ace"; break;
                    case 11: cardIdentity = "jack"; break;
                    case 12: cardIdentity = "queen"; break
                    case 13: cardIdentity = "king"; break;
                }
                /**
                 * Our deck now contains a full breakdown of a card, it's potential
                 * minimum and maximum values along with identity stuff for displaying
                 * the card to the user.  These objects can be passed around and all
                 * elements are contained.
                 */
                cardDeck.push({
                    cover: 'https://s3-eu-west-1.amazonaws.com/hm-test-1/back.png',
                    icon: 'https://s3-eu-west-1.amazonaws.com/hm-test-1/'+cardIdentity+'_of_'+suit+'s.png',
                    code: suit+"-"+i,
                    is_face_up: false,
                    suit: suit,
                    idx: i,
                    textName: cardIdentity,
                    maxValue: (i<2?11:i>10?10:i), // Aces=11;1-10=10;J+=10
                    minValue: (i<2?1:i>10?10:i) // Aces=1;1-10=10;J+=10
                });
            }
            return suitStack;
        });
        return cardDeck;
    }

    shuffleDeck(deck_of_cards) {
        /**
         * Taken from https://www.frankmitchell.org/2015/01/fisher-yates/.
         * No point re-inventing the wheel.
         */
        var i = 0
            , j = 0
            , temp = null

          for (i = deck_of_cards.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = deck_of_cards[i]
            deck_of_cards[i] = deck_of_cards[j]
            deck_of_cards[j] = temp
          }
         return deck_of_cards;
    }
}
