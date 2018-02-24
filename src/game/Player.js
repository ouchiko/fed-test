/**
 * Blackjack - Player.js
 * The basic Player object.
 */
export default class Player {
    /**
     * Init.
     *
     * @param <string> name - Name of the player.
     * @param <bool> isDealer - Are we the dealer?
     */
    constructor(name, isDealer) {
        this.state = {
            name: name,
            isDealer: isDealer,
            cards: []
        };
    }

    getCards() {
        return this.state.cards;
    }


    /**
     * Is this player a dealer?
     *
     * @return <bool>
     */
    isDealer() {
        return this.state.isDealer;
    }

    /**
     * Collect a card from the deck.
     *
     * @param <object> card.
     */
    collectCard(card) {
        this.state.cards.push(
            card
        );

        console.log(this.state.name + " got card:");
        console.dir(this.state.cards);
    }
}
