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
            cascade_update: this.props.cascade_update
        };
 	}

    takeCardForPlayer() {
        game_engine.state.players[0].collectCard(game_engine.state.deck.dealCard());
        this.setState({cascade_update: this.state.cascade_update++});
    }

 	render() {
        console.log("Render: Casino");
 		return (
     		<div className={casinoView}>
                <div className={casinoTitle}>{this.props.title}</div>
                <Dealer cascade_update={this.state.cascade_update}/>
                <Players cascade_update={this.state.cascade_update}/>
                <button onClick={this.takeCardForPlayer.bind(this)}>take card</button>
            </div>
 		)
 	}
 }

 export default Casino;
