import React, { Component } from 'react'
import Person from './Person';
 /* Helpers */

 /* CSS */

 class Players extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.state = {
            cascade_update: this.props.cascade_update
        };
 	}

    componentDidMount() {

    }

 	render() {
        console.log("Render: Players");
        let myPlayers = game_engine.getPlayers();
        let playerContent = myPlayers.map((aPlayer, index)=>{
            console.dir(aPlayer.getCards());
            return <Person key={index} cascade_update={this.state.cascade_update} cards={aPlayer.getCards()}/>;
        });

 		return (
                <div id="players--container">{playerContent}</div>
 		)
 	}
 }

 export default Players;
