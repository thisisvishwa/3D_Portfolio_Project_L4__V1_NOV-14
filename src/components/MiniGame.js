```javascript
import React, { Component } from 'react';
import Phaser from 'phaser';

class MiniGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            gameData: {}
        };
    }

    componentDidMount() {
        this.fetchGameData();
        this.initGame();
    }

    fetchGameData = () => {
        // Fetch game data from API
        fetch('/games')
            .then(response => response.json())
            .then(data => this.setState({ gameData: data }))
            .catch(error => console.error('Error:', error));
    }

    initGame = () => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: this.preload,
                create: this.create
            }
        };

        this.setState({ game: new Phaser.Game(config) });
    }

    preload = () => {
        this.state.game.load.setBaseURL('http://labs.phaser.io');

        this.state.game.load.image('sky', 'assets/skies/space3.png');
        this.state.game.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.state.game.load.image('red', 'assets/particles/red.png');
    }

    create = () => {
        this.state.game.add.image(400, 300, 'sky');

        const particles = this.state.game.add.particles('red');

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.state.game.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }

    render() {
        return (
            <div id="phaser-game">
                {/* Phaser game will be inserted here */}
            </div>
        );
    }
}

export default MiniGame;
```