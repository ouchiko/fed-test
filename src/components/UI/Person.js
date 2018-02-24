import React, { Component } from 'react'

 /* Helpers */
import Card from "./Card";
 /* CSS */
import {personContainer} from '../../css/Person.scss';


 class Person extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.state = {
            cascade_update: this.props.cascade_update
        };
 	}

 	render() {
        console.log("Render: Player");
        let cards = this.props.cards.map((aCard, index) => {
            return <Card card={aCard} key={index}/>;
        });
 		return (
     		<div className={personContainer}>{cards}</div>
 		)
 	}
 }

 export default Person;
