//Daniel Santos at this point just straight up gives up thanks to the teacher's speed -_-
import {Player} from './player.js';
import {Snail} from './snail.js';
import {Bug} from './bug.js';

let lvlData = [
    {
        x: 1024 - 128,
        y: 2048 - 192,
        repeat: 1,
        key: 'ground',
        frame: 0,
        width: 128,
        height: 128,
        physics: true
    },
    {
        x: 1024,
        y: 2048 - 192,
        repeat: 3,
        key: 'ground',
        frame: 1,
        width: 128,
        height: 128,
        physics: true
    },
    {
        x: 1024 + 128 * 3,
        y: 2048 - 192,
        repeat: 1,
        key: 'ground',
        frame: 2,
        width: 128,
        height: 128,
        physics: true
    },

    {
        x: 1024 + 128,
        y: 2048 - 768,
        repeat: 1,
        key: 'ground',
        frame: 0,
        width: 128,
        height: 128,
        physics: true
    },
    {
        x: 1024 + 256,
        y: 2048 - 768,
        repeat: 1,
        key: 'ground',
        frame: 0,
        width: 128,
        height: 128,
        physics: false
    },
    {
        x: 1024 + 384,
        y: 2048 - 768,
        repeat: 3,
        key: 'ground',
        frame: 1,
        width: 128,
        height: 128,
        physics: true
    },
    {
        x: 1024 + 768,
        y: 2048 - 768,
        repeat: 1,
        key: 'ground',
        frame: 2,
        width: 128,
        height: 128,
        physics: true
    },

    {
        x: 192,
        y: 2048 - 384,
        repeat: 1,
        key: 'ground',
        frame: 0,
        width: 128,
        height: 128,
        physics: true
    },
    {
        x: 192 + 128,
        y: 2048 - 384,
        repeat: 2,
        key: 'ground',
        frame: 1,
        width: 128,
        height: 128,
        physics: true
    },
    {
        x: 192 + 384,
        y: 2048 - 384,
        repeat: 1,
        key: 'ground',
        frame: 2,
        width: 128,
        height: 128,
        physics: true
    }
]

let snailData = [
    {
        x: 192,
        y: 1568,
        key: 'snail',
        frame: 0,
        animation: 'snailwalk',
        min: {
            x: 192,
            y: 1568
        },
        max: {
            x: 640 - 64,
            y: 1568
        },
        velocity: 10
    },

    {
        x: 1152,
        y: 1175,
        key: 'snail',
        frame: 0,
        animation: 'snailwalk',
        min: {
            x: 1152,
            y: 1175
        },
        max: {
            x: 1920 - 128,
            y: 1175
        },
        velocity: 10
    },

]

let ladybugsData = [
    {
        x: 1236,
        y: 1728,
        key: 'ladybug',
        frame: 0,
        animation: 'ladybug-flying',
        min: {
            x: 736,
            y: 1728
        },
        max: {
            x: 1764,
            y: 1728
        },
        velocity: 160
    }
]


export class Level1 extends Phaser.Scene {
    
    constructor(){
        
        super('Level1');
        
    }

    init(){
        this.controls = this.input.keyboard.createCursorKeys();
    
        this.input.on('pointerdown', (pointer) => {
            console.log(`${pointer.x}, ${pointer.y}`);
        })

        this.snailsToCatch = 0;
        this.hearts = [];
    }

    create(){
        this.platforms = this.physics.add.staticGroup({
            allowGravity: false,
            immovable: true
        });

        this.add.image(0, 0, 'bk').setOrigin(0).setScale(2);

        this.ladders = this.physics.add.staticGroup({
            allowGravity: false,
            immovable: true
        });

        this.snails = this.physics.add.group();
        this.ladybugs = this.physics.add.group({
            allowGravity: false
        });

        
        this.createPlat();
        this.createLadd();
        this.createSnails();
        this.createLadybugs();

        this.snailsToCatch = snailData.length;

        this.CreateExit();

        //snailData.forEach(snail => {
        //    let newSnail = new Snail(this, snail);
        //    this.snails.add(newSnail);
        //})

        //this.snail = this.add.sprite(192, 1568, 'snail', 0).setOrigin(0);
        //this.snail.anims.play("snailwalk");

        //this.snails.add(this.snail);
        
        this.player = new Player(
            this, 
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'player', 6    
        );
        
        /*
        let plat = this.add.image(1024 - 128, 2048 - 192, 'ground', 0).setOrigin(0);
        this.platforms.add(plat);
        plat = this.add.tileSprite(1024, 2048 - 192, 3 * 128, 128, 'ground', 1).setOrigin(0);
        this.platforms.add(plat);
        plat = this.add.image(1024 + 3 * 128, 2048 - 192, 'ground', 2).setOrigin(0);
        this.platforms.add(plat);
        */
       
        this.CreateAudioSources();

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.snails, this.platforms);
        this.physics.add.overlap(this.player, this.ladders, this.onLadder, null, this);
        this.physics.add.overlap(this.player, this.snails, this.onSnail, null, this);
        this.physics.add.overlap(this.player, this.ladybugs, this.onLadybug, null, this);
        this.physics.add.overlap(this.player, this.flag, this.onFlag, null, this);

        this.success = false;

        this.prepareHUD();

        /*    
        this.player = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'player', 6
        );

        // EX to change the frame: 
        // this.player.setFrame(3);
    
        this.player.anims.play('walk');
    
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);
        */
        
    }
    

    CreateExit(){

        this.sign = this.add.image(this.game.config.width - 276,
                    this.game.config.height - 128,
                    'objs', 5).setOrigin(0);
    
        this.flag = this.add.sprite(this.game.config.width - 128,
                    this.game.config.height - 128,
                    'objs', 0).setOrigin(0);
    
        this.physics.add.existing(this.flag);
        this.flag.body.allowGravity = false;
        this.flag.body.setImmovable(false);
    
    }


    createPlat(){
    
        lvlData.forEach(
    
            data => {
                let newPlatform = undefined;
                if(data.repeat == 1){
                    newPlatform = this.add.sprite(data.x, data.y, data.key, data.frame);
                } else {
                    newPlatform = this.add.tileSprite(data.x, data.y, data.repeat * data.width, data.height, data.key, data.frame);
                }

                newPlatform.setOrigin(0);
                if(data.physics){
                    this.platforms.add(newPlatform);        
                }
            }
    
        );
    
    }

    createLadd(){
        let ladder = this.add.tileSprite(1024 + 256, 2048 - 768, 128, 5 * 128, 'objs', 3).setOrigin(0);
        let ladderTop = this.add.sprite(1024 + 256, 2048 - 768 - 128, 'objs', 4).setOrigin(0);
        
        this.ladders.add(ladder);
        this.ladders.add(ladderTop);
    }

    onLadder(player, ladder){
        this.player.setOnLadder(true);
    }

    update(time){

        this.player.update(time);
        this.snails.getChildren().forEach( snail => snail.update(time));
        this.ladybugs.getChildren().forEach( ladybug => ladybug.update(time));
        this.player.setOnLadder(false);
        this.updateHUD();
    
    }
    
    onSnail(player, snail){
        //console.log("LEAVE ME ALONE!!!");
        snail.destroy();
        this.catch.play();
        this.snailsToCatch--;
        if(this.snailsToCatch==0) {
            this.tada.play();
            this.flag.anims.play('wave');
            this.success = true;
        }
    }

    onLadybug(player, ladybug){
        player.hit(); 
        this.punch.play();
        if(!player.isDed()){
            player.setPosition(
                this.game.config.width * 0.5,
                this.game.config.height * 0.5
            )
        } else {
            this.scene.restart();
        }
    }

    onFlag(player, flag){
        if(this.success) {
            this.tada.play();
            this.scene.restart();
        }
    }
   

    createSnails(){
        snailData.forEach(snail => {
        
            let NewSnail = new Snail(this, snail);
            this.snails.add(NewSnail);
        
        })
    
    }
    
    createLadybugs(){
    
        ladybugsData.forEach(ladybug => {
        
            let NewLadybug = new Bug(this, ladybug);
            this.ladybugs.add(NewLadybug);
        
        })
    
    }
    
    CreateAudioSources(){
        this.catch = this.sound.add('ding', { loop:false });
        this.punch = this.sound.add('punch', { loop:false });
        this.tada = this.sound.add('tada', { loop:false });
    }
    
    prepareHUD(){
    
        let nLives = this.player.getLives();
    
        for (let i = 0; i < nLives; ++i){
        
            this.hearts.push(this.add.image(128+i*128, 128, 'fullHeart'));
        
        }
    }

    
    updateHUD(){
    
        let availableLives = this.player.getLives();
    
        for (let i = this.hearts.length - 1; i >= availableLives; --i){
        
            this.hearts[i].setTexture('emptyHeart');
        
        }
    }
        
}