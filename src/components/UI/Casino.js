import React, { Component } from 'react'

 /* Helpers */
import Dealer from "./Dealer";
import Players from "./Players";
 /* CSS */
 import {casinoView, casinoTitle} from '../../css/Casino.scss';

 class Casino extends Component {

 	constructor(props, context) {
 		super(props, context);
 		this.state = {
            cascade_update: this.props.cascade_update,
            is_player_stick: false
        };
 	}

    makePlayerStick() {
        console.log("Player has stuck.");
        this.setState({
            is_player_stick: true
        });
        this.makeDealerCardsVisible();
    }

    takeCardForPlayer() {
        game_engine.state.players[0].collectCard(game_engine.state.deck.dealCard());
        this.setState({cascade_update: this.state.cascade_update++});
    }

    makeDealerCardsVisible() {
        game_engine.makeAllCardsVisible();
    }

    componentWillMount() {
        console.log("WillUpdate");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate");
        if (this.state.is_player_stick) {

        }
    }



 	render() {
        console.log("Render: Casino");
 		return (
     		<div className={casinoView}>
                <div className={casinoTitle}>{this.props.title}</div>
                <Dealer cascade_update={this.state.cascade_update}/>
                <Players cascade_update={this.state.cascade_update}/>
                <button onClick={this.takeCardForPlayer.bind(this)}>take card</button>
                <button onClick={this.makePlayerStick.bind(this)}>stick</button>
            </div>
 		)
 	}
 }

 export default Casino;
