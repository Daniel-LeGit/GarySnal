export class LoadScene extends Phaser.Scene {
    
    constructor(){
        
        super('LoadScene');
        
    }
    
    
    preload(){
        
        this.load.image('bk', './IMGS/blue_land.png');

        this.load.spritesheet('player', './IMGS/player.png', {
            
            frameWidth: 128,
            frameHeight: 144
            
        });
        this.load.spritesheet('ground', './IMGS/ground.png', {
            
            frameWidth: 128,
            frameHeight: 128
            
        });
        this.load.spritesheet('objs', './IMGS/objects.png', {
            
            frameWidth: 128,
            frameHeight: 128
            
        });
        this.load.spritesheet('snail', './IMGS/snail.png', {
            
            frameWidth: 128,
            frameHeight: 96
            
        });
        this.load.spritesheet('ladybug', './IMGS/lady_bug.png', {
            
            frameWidth: 128,
            frameHeight: 96
            
        });

        this.load.image('fullHeart', './IMGS/hudHeart_full.png');
        this.load.image('emptyHeart', './IMGS/hudHeart_empty.png');
        
        
        this.load.audio('punch', './AUDIO/punch.wav');
        this.load.audio('ding', './AUDIO/ding.wav');
        this.load.audio('tada', './AUDIO/tada.wav');
        
    }
    
    create(){
        
        this.createAnim();
        
        this.scene.start('Level1');
        
    }
    
    createAnim(){
        
        this.anims.create({
            
            key: 'walk',
            frames: this.anims.generateFrameNames('player', {
                
                frames:[9, 10]
                
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
                    
        });
        
        this.anims.create({
            
            key: 'jump',
            frames: this.anims.generateFrameNames('player', {
                
                frames:[9, 10]
                
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
                    
        });
        
        this.anims.create({
            
            key: 'climb',
            frames: this.anims.generateFrameNames('player', {
                
                frames:[0, 1]
                
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
                     
        });

        this.anims.create({
            key: 'snailwalk',
            frames: this.anims.generateFrameNames('snail', {
                
                frames:[0, 1]
                
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
        })
        
        this.anims.create({
            
            key: 'ladybug-flying',
            frames: this.anims.generateFrameNames('ladybug', {
                
                frames:[0, 1]
                
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
            
            
        });
 
        this.anims.create({
            
            key: 'wave',
            frames: this.anims.generateFrameNames('objs', {
                
                frames:[1, 2]
                
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
            
            
        });        
    }
    
}