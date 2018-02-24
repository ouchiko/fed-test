import React, { Component } from 'react'

 /* Helpers */

 /* CSS */
 import {card,icon} from '../../css/Card.scss';


 class Card extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.state = {};
 	}

 	render() {
        console.dir(this.props.card);
 		return (
 		    <div className={card}>
                    <img width="150" src={this.props.card.icon}/>
            </div>
 		)
 	}
 }

 export default Card;
