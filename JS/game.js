import { LoadScene } from './loadscene.js';
import { Level1 } from './Scene1.js';

const config = {
    
    width: 2048,
    height: 2048,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#832974',
    scene:[LoadScene, Level1],
    physics:{
        
        default: 'arcade',
        arcade: {
            
            gravity: {
                
                y: 750
                
            },
            debug: true
            
        }
        
    },
    
    pixelArt: true
    
}

new Phaser.Game(config);