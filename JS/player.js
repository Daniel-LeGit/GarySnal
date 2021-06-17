/* -_- */
export class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
    
        this.setCollideWorldBounds(true);
        this.setScale(0.9);
    
        this.initialFrame = 6;

        this.horizontal_V = 256;
        this.jump_V = 600;

        this.controls = scene.input.keyboard.createCursorKeys();

        this.onLadder = false;

        this.state = "stop";
        this.previousState = this.state;

        this.lives = 3;
    }

    setOnLadder(value){
        this.onLadder = value;
    }

    update(time){

        let onGround = this.body.blocked.down || this.body.touching.down;

        this.body.allowGravity = !this.onLadder;

        if(this.controls.left.isDown){
            this.setVelocityX(-this.horizontal_V);
            this.flipX = true;
            if(onGround && !this.anims.isPlaying)
            {        
                this.state = "walk";
                //this.anims.play('walk');
            }
    
        } else if(this.controls.right.isDown){
            this.setVelocityX(this.horizontal_V);
            this.flipX = false;
            if(onGround && !this.anims.isPlaying)
            {        
                this.state = "walk";
                //this.anims.play('walk');
            }

        } else {
            this.setVelocityX(0);
            //if(this.anims.isPlaying)
            //{        
            //    this.anims.stop('walk');
            //}
            if(onGround){
                this.state = "stop";
                //this.setFrame(this.initialFrame);
            }
        }

        if(onGround && this.controls.space.isDown) {
            this.setVelocityY(-this.jump_V);
            this.state = "jump";
            //this.setFrame(5);
        }


        if(this.onLadder){
            if(this.controls.up.isDown){
                this.setVelocityY(-this.horizontal_V);
                this.state = "climb";
                //if (!this.anims.isPlaying){
                //    this.anims.play("climb");
                //}
            } else if(this.controls.down.isDown){
                this.setVelocityY(this.horizontal_V);
                this.state = "climb";
                //if (!this.anims.isPlaying){
                //    this.anims.play("climb");
                //}
            } else {
                this.setVelocityY(0);
                this.state = "stop";
            }
        }

        // stop, walk, jump, climb
        if(this.state != this.previousState) {
            this.previousState = this.state;
            if(this.anims.isPlaying){
                this.anims.stop();
            }

            if(this.state == "walk"){
                this.anims.play("walk");
            } else if(this.state == "climb"){
                this.anims.play("climb");
            } else if(this.state == "jump"){
                this.setFrame(5);
            } else if(this.state == "stop"){
                this.setFrame(this.initialFrame);
            }
        }
    }

    hit(){
        this.lives--;
    }

    isDed(){
        return this.lives===0;
    }

    getLives(){
        return this.lives;
    }

}
