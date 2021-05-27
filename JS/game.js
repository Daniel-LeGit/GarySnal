import { LoadScene } from './loadscene.js';
import { Level1 } from './scene1.js';

const config = {
    
    width: 1920,
    height: 1080,
    type: Phaser.Auto,
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
    
    pixelArt: true,
    
    
}

new Phaser.Game(config);