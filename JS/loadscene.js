export class LoadScene extends Phaser.Scene {
    
    constructor(){
        
        super('')
        
    }
    
    
    preload(){
        
        this.load.image('bk', './IMGS/blue_land.png')
        this.load.spritesheet('player', './IMGS/player.png', {
            
            frameWidth: 128,
            frameHeight: 144
            
        })
    }
    
    create(){
        
        this.createAnim();
        
        this.scene.start('Level1');
        
    }
    
    createAnim(){
        
        this.anims.create({
            
            key: 'walk',
            frames: this.anim.generateFrameNames('player', {
                
                frames:[9, 10]
                
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
            
            
        });
        
        this.anims.create({
            
            key: 'walk',
            frames: this.anim.generateFrameNames('player', {
                
                frames:[9, 10]
                
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
            
            
        });
        
    }
    
}