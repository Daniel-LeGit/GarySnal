//Daniel Santos at this point just straight up gives up thanks to the teacher's speed -_-

init(){
    
    
    
}

create(){
    
    this.add.image('bk').setOrigin(0).setScale(2);
        
    this.player = new Player(
    this, 
    this.game.config.width * 0.5,
    this.game.config.height * 0.5,
    'player', 6
    
    );
/*    
    this.add.sprite(
    
    this.game.config.width * 0.5,
    this.game.config.height * 0.5,
    'player', 6
    
    );
    
    this.player.anims.play('walking');
    
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);
    */

    
}

createPlat(){
    
    lvlData.forEach(
    
    data => {
        
        if(data.repeat == 1){
            
            
        } else {
            
            
            
        }
        
        this.platfoms.add(newPlatfrm)
        
    }
    
    );
    
}

update(time){
    
    if(this.controls.left.isdown)...
    
}