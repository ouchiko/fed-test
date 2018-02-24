import React, { Component } from 'react'

 /* Helpers */
import Card from "./Card";
 /* CSS */
 import {dealerContainer} from '../../css/Dealer.scss';

 class Dealer extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.state = {
            cascade_update: this.props.cascade_update
        };
 	}

 	render() {
        console.log("Render: Dealer");
        let myDealer = game_engine.getDealer();
        let dealerCards = myDealer.getCards().map((aCard, index) => {
            return <Card card={aCard} key={index}/>;
        });

 		return (
     		<div class={dealerContainer}>{dealerCards}</div>
 		)
 	}
 }

 export default Dealer;
