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
    
CreateExit(){

    
    this.sign = this.add.image(this.game.width - 276,
                   this.game.height - 128,
                   'objtects', 5).setOrigin(0);
    
    this.physics.add.existing(this.flag);
    
    this.flag = this.add.image(this.game.width - 128,
                   this.game.height - 128,
                   'objtects', 0).setOrigin(0);
    
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
    
    OnSnail(player, Snail){
        
        Snail.destroy();
        this.catch.play();
        
    }
    
CreateSnail(){
    
    snaildata.forEach(snail => {
        
        let NewSnail = new Snail(this, snail);
        this.snails.add(NewSnail);
        
    })
    
}
    
CreateLadybug(){
    
    bugdata.forEach(snail => {
        
        let NewLadybug = new Bug(this, ladybug);
        this.ladybug.add(NewLadybug);
        
    })
    
}
    //Dammit I'm too far behind on this... -_-
    
hit(){
    
    this.lives--;
    
}
    
    isded(){
        
        
        
    }
    
prepareHUD(){
    
    let nLives = this.player.getLives();
    
    for (let i = 0; i < nLives; ++i){
        
        this.add.image(128+i*128, 128, 'full_heart');
        
    }
    
}
    
updateHUD(){
    
    let availableLives = this.player.getLives();
    
    for (let i = this.hearts.length - 1; i >= availableLives; --i){
        
        this.hearts[i].setTexture('empty_heart');
        
    }
    
}