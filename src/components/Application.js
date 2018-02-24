import React, { Component } from 'react'

 /* Helpers */
import Casino from './UI/Casino';
 /* CSS */

 class Application extends Component {
 	constructor(props, context) {
 		super(props, context);
 		this.state = {
            cascade_update: 0 // Initialise a cascading update into the game.
        };
 	}

    action_createCascadingUpdate() {
        this.setState({
            cascade_update: this.state.cascade_update++
        });
    }

 	render() {
 		return (
 		    <div className="appmain">
                <Casino title="FED Casino" cascade_update={this.state.cascade_update}/>
            </div>
 		)
 	}
 }

 export default Application;
