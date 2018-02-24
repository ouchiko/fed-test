/**
 * Celebrity Trader
 * Root Application File.
 */
/* React UI */
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';

/* Game Mechanics */
import GameEngine from './game/GameEngine';


/* Create a one player game, could be extended to support N players.. */
window.game_engine = new GameEngine(1);

ReactDOM.render(<Application/>, document.getElementById('root'));
registerServiceWorker();
