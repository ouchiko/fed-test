/**
 * Blackjack.
 * GameEngine.js - This file runs the logic of the game.
 */
import Deck from './Deck';
import Player from './Player';

export default class GameEngine {

    constructor(num_of_players) {
        this.state = {
            deck: null,
            dealer: null,
            players: [],
            game_active: 0,
            should_reset: 0,
            all_cards_visible: false,
            total_players: num_of_players+1 // Players + Dealer.
        };
        this.createGame(num_of_players);
        this.createDeck();
        this.dealCards();
    }

    getPlayers() {
        return this.state.players;
    }

    getDealer() {
        return this.state.dealer;
    }

    isAllowedInvisibleCard() {
        return !this.state.all_cards_visible;
    }

    /**
     * Sets up the game base.
     * We need a dealer and N players.
     */
    createGame(num_of_players=1) {
        this.state.dealer = new Player("Dealer", true);
        for (let i=0;i<num_of_players;i++) {
            this.state.players.push(new Player("Player"+i, false));
        }
    }

    makeAllCardsVisible() {
        this.state.all_cards_visible = true;
    }

    /**
     * All card games need a deck!
     */
    createDeck() {
        this.state.deck = new Deck();
    }

    /**
     * After the players have bet, the dealer will give two cards to each player
     * and two cards to himself. One of the dealer cards is dealt face up.
     * The facedown card is called the "hole card."
     *
     * So now.. we have a dealer and N players with two cards each from the
     * generated/shuffled deck.  We can play!
     */
    dealCards() {
        let is_face_up = true;
        for (let cards_to_deal = 0; cards_to_deal<2; cards_to_deal++) {
            this.state.dealer.collectCard(this.state.deck.dealCard(is_face_up));
            this.state.players.forEach((player)=> {
                player.collectCard(this.state.deck.dealCard());
            });
            is_face_up = false;
        }
    }




}
