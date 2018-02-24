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
 		return (
 		    <div className={card}>
                    <img width="150" src={(game_engine.isAllowedInvisibleCard() && this.props.card.is_face_up===true)?this.props.card.cover:this.props.card.icon}/>
            </div>
 		)
 	}
 }

 export default Card;
