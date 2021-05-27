/* -_- */

constructor(){
    
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    this.setCollideWorldBounds(true);
    this.setScale(1);
    
    this.horizontal_V = 256;
}

update(time){
    
    this.setVelocityX(-this.horizontal_V);
    this.flipX = true;
    if(!this.anims.isPlaying){
        
        this.anim.play('walking');
        
    }
    
    this.setVelocityX(this.horizontal_V);
    this.flipX = false;
    if(!this.anims.isPlaying){
        
        this.anim.play('walking');
        
    }
    
    this.setVelocityX(0);
    if(this.anims.isPlaying){
        
        this.anim.stop('walking');
        
    }
    
    this.setFrame(6);
}