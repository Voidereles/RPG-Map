

let ctx = null;
const gameMap = [
    0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0,
    0, 2, 1, 1, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 0,
    0, 2, 1, 4, 4, 4, 0, 0, 0, 0, 1, 3, 1, 3, 1, 0, 2, 4, 4, 0,
    0, 2, 1, 4, 4, 1, 1, 1, 1, 0, 1, 1, 1, 3, 2, 2, 2, 1, 4, 0,
    0, 2, 3, 4, 4, 3, 3, 1, 1, 0, 1, 3, 1, 3, 2, 0, 2, 1, 4, 0,
    0, 2, 3, 4, 4, 1, 3, 3, 1, 0, 1, 3, 1, 2, 2, 0, 2, 2, 4, 0,
    0, 2, 2, 4, 4, 1, 1, 1, 1, 0, 1, 1, 1, 2, 1, 0, 3, 2, 4, 0,
    0, 3, 2, 3, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 4, 4,
    0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
    0, 1, 1, 5, 1, 2, 4, 4, 4, 1, 1, 1, 3, 1, 2, 1, 1, 1, 1, 0,
    0, 3, 1, 1, 1, 2, 4, 4, 4, 4, 4, 1, 1, 1, 2, 2, 2, 2, 1, 0,
    0, 1, 1, 1, 3, 2, 3, 3, 1, 1, 4, 1, 3, 1, 1, 3, 3, 2, 1, 0,
    0, 1, 2, 2, 2, 2, 1, 3, 1, 1, 4, 1, 1, 1, 1, 1, 3, 2, 1, 0,
    0, 1, 2, 3, 3, 3, 1, 3, 1, 1, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4,
    0, 1, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 0,
    0, 2, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 2, 2, 1, 0,
    0, 2, 0, 2, 0, 0, 0, 1, 1, 3, 2, 1, 1, 3, 1, 3, 1, 1, 1, 0,
    0, 2, 0, 2, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 0,
    0, 2, 0, 2, 1, 0, 1, 1, 1, 3, 2, 1, 1, 1, 1, 3, 3, 1, 3, 0,
    0, 2, 0, 2, 1, 0, 1, 3, 1, 1, 2, 3, 3, 3, 1, 3, 1, 1, 1, 0,
    0, 2, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 2, 2, 2, 0, 1, 0, 0, 1, 3, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    0, 0, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0,
    0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 5, 1, 2, 1, 0, 0, 1, 0,
    0, 3, 3, 3, 3, 3, 3, 1, 0, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
    0, 3, 3, 1, 1, 1, 3, 1, 0, 2, 1, 1, 1, 1, 2, 1, 3, 3, 1, 0,
    0, 1, 3, 1, 3, 1, 1, 1, 0, 2, 1, 1, 1, 1, 2, 1, 0, 1, 1, 0,
    0, 1, 3, 1, 4, 4, 4, 1, 0, 2, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 4, 1, 4, 1, 0, 2, 2, 2, 2, 0, 2, 1, 1, 0, 1, 0,
    0, 1, 4, 4, 4, 4, 4, 1, 0, 1, 3, 3, 2, 2, 2, 1, 1, 0, 1, 0,
    0, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 0, 2, 2, 1, 1, 1, 1, 0,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0

];

let tileset = null, tilesetURL = "tileset.png", tilesetLoaded = false;

const floorTypes = {
    solid: 0,
    path: 1,
    water: 2,
    grass: 4,
    hole: 5
    //krok pierwszy
}

const tileTypes = {
    0: { color: "#685b48", floor: floorTypes.solid, sprite: [{ x: 0, y: 0, w: 40, h: 40 }] },
    1: { color: "#5aa457", floor: floorTypes.grass, sprite: [{ x: 40, y: 0, w: 40, h: 40 }] },
    2: { color: "#e8bd7a", floor: floorTypes.path, sprite: [{ x: 80, y: 0, w: 40, h: 40 }] },
    3: { color: "#286625", floor: floorTypes.solid, sprite: [{ x: 200, y: 0, w: 40, h: 40 }] },
    4: { color: "#678fd9", floor: floorTypes.water, sprite: [{ x: 160, y: 0, w: 40, h: 40 }] },
    5: { color: "#ff0000", floor: floorTypes.hole, sprite: [{ x: 40, y: 40, w: 40, h: 40 }] }
    //krok drugi
};

const directions = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
}

let gameTime = 0;
let gameSpeeds = [
    { name: "Normal", mult: 1 }
    //pomysl, zeby mozna bylo przyspieszac lub stopować grę
];
let currentSpeed = 0;

const mapTileData = new TileMap();

function TileMap() {
    this.map = [];
    this.w = 0;
    this.h = 0;
    this.levels = 4;
}

//TileMap będzie klasą która będzie miała 3 właściwości - w, h i map, map będzie tablicą która 
//będzie przechowywać obiekty Tile
function Tile(tx, ty, tt) {
    this.x = tx;
    this.y = ty;
    this.type = tt;
    this.eventEnter = null;
    this.object = null;
    this.itemStack = null;
}
//tx, ty to pozycje tile'a na mapie, a tt to id typu tile'a (tileType) 


//Klasa TileMap będzie mieć metodę buildMapFromData, która weźmie 3 argumenty, 'd' który będzie tablicą 
//zawierającą id tileType (tt) + w, h
TileMap.prototype.buildMapFromData = function (d, w, h) {
    this.w = w;
    this.h = h;
    //sprawdzamy, czy długość argumentu d jest identyczna do w*h, jeśli nie, zwracamy false. 
    //następnie czyścimy właściwość map z wszystkiego
    if (d.length != (w * h)) { return false; };
    this.map.length = 0;

    //idziemy pętlą po tablicy i dodajemy nowy obiekt Tile do tablicy map 
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            this.map.push(new Tile(x, y, d[((y * w) + x)]));
            //np. d[(1*2)+2)]  d[4]
        }
    }

    return true;
}

let itemTypes = {
    1: {
        name: "Treasure",
        maxStack: 4,
        sprite: [{ x: 80, y: 40, w: 55, h: 55 }],
        offset: [0, 0]
    }
};

function Stack(id, qty) {
    this.type = id;
    this.qty = qty;
}
function Inventory(s) {
    this.spaces = s;
    this.stacks = [];
}
Inventory.prototype.addItems = function (id, qty) {
    for (let i = 0; i < this.spaces; i++) {
        if (this.stacks.length <= i) {
            let maxHere = (qty > itemTypes[id].maxStack ?
                itemTypes[id].maxStack : qty);
            this.stacks.push(new Stack(id, maxHere));

            qty -= maxHere;
        }
        else if (this.stacks[i].type == id &&
            this.stacks[i].qty < itemTypes[id].maxStack) {
            let maxHere = (itemTypes[id].maxStack - this.stacks[i].qty);
            if (maxHere > qty) { maxHere = qty; }

            this.stacks[i].qty += maxHere;
            qty -= maxHere;
        }

        if (qty == 0) { return 0; }
    }

    return qty;
};

function PlacedItemStack(id, qty) {
    this.type = id;
    this.qty = qty;
    this.x = 0;
    this.y = 0;
}
PlacedItemStack.prototype.placeAt = function (nx, ny) {
    if (mapTileData.map[toIndex(this.x, this.y)].itemStack == this) {
        mapTileData.map[toIndex(this.x, this.y)].itemStack = null;
    }

    this.x = nx;
    this.y = ny;

    mapTileData.map[toIndex(nx, ny)].itemStack = this;
};

const objectCollision = {
    none: 0,
    solid: 1,
};

//do wykorzystania potem, dodawanie skrzynek na mapę
// const objectTypes = {
//     1: {
//         //offset oznacza przesunięcie w pikselach, od którego zacznie być rysowane to coś
//         name: "Box",
//         sprite: [{ x: 40, y: 130, w: 40, h: 40 }],
//         offset: [0, 0],
//         collision: objectCollision.solid,
//         zIndex: 1
//     },
//     2: {
//         name: "Broken Box",
//         sprite: [{ x: 30, y: 110, w: 40, h: 40 }],
//         offset: [0, 0],
//         collision: objectCollision.solid,
//         zIndex: 1
//     }
// }

function MapObject(nt) {
    this.x = 0;
    this.y = 0;
    this.type = nt;
}

//klasa MapObject ma metode placeAt, która pobiera 2 argumenty x i y
// w ktorym miejscu obiekty na mapie powinny sie znajdowac. 
//najpierw sprawdza, czy juz nie znajduje sie juz na tile'u.
MapObject.prototype.placeAt = function (nx, ny) {
    if (mapTileData.map[toIndex(this.x, this.y)].object == this) {
        mapTileData.map[toIndex(this.x, this.y)].object = null;
    }

    this.x = nx;
    this.y = ny;
    mapTileData.map[toIndex(nx, ny)].object = this;
};

const tileW = 40,
    tileH = 40;
const mapW = 20,
    mapH = 33;

let currentSecond = 0,
    frameCount = 0,
    framesLastSecond = 0;
lastFrameTime = 0;

let keysDown = {
    37: false,
    38: false,
    39: false,
    40: false
    //strzalki
}

//to keeptrack visible area of the screen
const viewport = {
    screen: [0, 0],
    //startTile to lewa górna komórka, która będzie widoczna w wycinku, analogicznie endTile jako dolna prawa
    startTile: [0, 0],
    endTile: [0, 0],
    //offset to jak dużo od środka będzie rysowane
    offset: [0, 0],
    update: function (px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px);
        this.offset[1] = Math.floor((this.screen[1] / 2) - py);

        let tile = [
            Math.floor(px / tileW),
            Math.floor(py / tileH)
        ];

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 2) / tileW);
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 2) / tileH);

        if (this.startTile[0] < 0) {
            this.startTile[0] = 0;
        }
        if (this.startTile[1] < 0) {
            this.startTile[1] = 0;
        }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 2) / tileW);
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 2) / tileH);

        if (this.endTile[0] >= mapW) {
            this.endTile[0] = mapW - 1;
        }
        if (this.endTile[1] >= mapH) {
            this.endTile[1] = mapH - 1;
        }
        //warunki są do ogarnięcia krańców mapy


    }
}




let player = new Character();

function Character() {
    this.tileFrom = [1, 1];
    this.tileTo = [1, 1];
    this.timeMoved = 0;
    this.dimensions = [30, 30];
    this.position = [45, 45];
    // this.delayMove = 350;
    this.delayMove = {};
    this.delayMove[floorTypes.path] = 350;
    this.delayMove[floorTypes.grass] = 500;
    this.delayMove[floorTypes.water] = 1000;
    this.delayMove[floorTypes.hole] = 1000;
    this.direction = directions.up;
    this.sprites = {};
    this.sprites[directions.up] = [{ x: 31, y: 120, w: 30, h: 33 }];
    this.sprites[directions.right] = [{ x: 31, y: 154, w: 33, h: 30 }];
    this.sprites[directions.left] = [{ x: 31, y: 215, w: 33, h: 30 }];
    this.sprites[directions.down] = [{ x: 31, y: 180, w: 30, h: 33 }];


    this.inventory = new Inventory(3);
}

//klasa character metoda placeAt która przemieszcza postać na kafelkę która jest celem
Character.prototype.placeAt = function (x, y) {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
    ((tileH * y) + ((tileH - this.dimensions[1]) / 2))];
}

/* #region Poruszanie się */
Character.prototype.processMovement = function (t) {
    if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) {
        return false;
    }

    let moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor];

    if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1]);

        if (mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter != null) {
            mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
        }

        let tileFloor = tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor;
        if (tileFloor == floorTypes.hole) {
            alert('Wpadłeś do dziury i giniesz. Zaczynasz od początku!');
            window.location.reload(true);
        }
        else if (tileFloor == floorTypes.water) {
            alert('Twoja postać nie potrafi pływać i umiera. Zaczynasz od początku!');
            window.location.reload(true);
        }

    } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2);
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2);

        if (this.tileTo[0] != this.tileFrom[0]) {
            let diff = (tileW / moveSpeed) * (t - this.timeMoved);
            this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff);
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
            let diff = (tileH / moveSpeed) * (t - this.timeMoved);
            this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
        }
        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);
    }

    // if (player.position[0] == 725 && player.position[1] == 1165) {
    //     alert('Wygrałeś!');
    //     this.placeAt(1, 1);
    // }

    return true;
};

Character.prototype.canMoveTo = function (x, y) {
    if (x < 0 || x >= mapW || y < 0 || y >= mapH || typeof this.delayMove[tileTypes[mapTileData.map[toIndex(x, y)].type].floor] == 'undefined') { return false; }
    if (mapTileData.map[toIndex(x, y)].object != null) {
        let o = mapTileData.map[toIndex(x, y)].object;
        // if (objectTypes[o.type].collision == objectCollision.solid) {
        //     return false;
        // }
        //do skrzynek
    }
    return true;
};
Character.prototype.canMoveUp = function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1); };
Character.prototype.canMoveDown = function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1); };
Character.prototype.canMoveLeft = function () { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]); };
Character.prototype.canMoveRight = function () { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]); };
Character.prototype.canMoveDirection = function (d) {
    switch (d) {
        case directions.up:
            return this.canMoveUp();
        case directions.down:
            return this.canMoveDown();
        case directions.left:
            return this.canMoveLeft();
        default:
            return this.canMoveRight();
    }
};

Character.prototype.moveLeft = function (t) { this.tileTo[0] -= 1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight = function (t) { this.tileTo[0] += 1; this.timeMoved = t; this.direction = directions.right; };
Character.prototype.moveUp = function (t) { this.tileTo[1] -= 1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown = function (t) { this.tileTo[1] += 1; this.timeMoved = t; this.direction = directions.down; };
Character.prototype.moveDirection = function (d, t) {
    switch (d) {
        case directions.up:
            return this.moveUp(t);
        case directions.down:
            return this.moveDown(t);
        case directions.left:
            return this.moveLeft(t);
        default:
            return this.moveRight(t);
    }
};
Character.prototype.pickUp = function () {
    if (this.tileTo[0] != this.tileFrom[0] ||
        this.tileTo[1] != this.tileFrom[1]) {
        return false;
    }

    let is = mapTileData.map[toIndex(this.tileFrom[0],
        this.tileFrom[1])].itemStack;

    if (is != null) {
        let remains = this.inventory.addItems(is.type, is.qty);

        if (remains) { is.qty = remains; }
        else {
            mapTileData.map[toIndex(this.tileFrom[0],
                this.tileFrom[1])].itemStack = null;
        }
    }

    return true;
};

/* #endregion */


function toIndex(x, y) {
    return ((y * mapW) + x);
}

function getFrame(sprite, duration, time, animated) {
    if (!animated) { return sprite[0]; }
    time = time % duration;

    for (x in sprite) {
        if (sprite[x].end >= time) { return sprite[x]; }
    }
}

window.onload = function () {
    let timer = 300;
    timeout = setInterval(() => {
        timer--;
        if (timer <= 0) {
            alert("Skończył się czas! Przegrywasz!");
            window.location.reload(true);
        }
        document.getElementById('time').textContent = "Pozostało sekund: " + timer;
    }, 1000);

    ctx = document.getElementById('game').getContext('2d');
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";

    window.addEventListener("keydown", function (e) {
        if (e.keyCode >= 37 && e.keyCode <= 40) { keysDown[e.keyCode] = true; }
        if (e.keyCode == 80) { keysDown[e.keyCode] = true; }
    });
    window.addEventListener("keyup", function (e) {
        if (e.keyCode >= 37 && e.keyCode <= 40) { keysDown[e.keyCode] = false; }
        if (e.keyCode == 83) {
            currentSpeed = (currentSpeed >= (gameSpeeds.length - 1) ? 0 : currentSpeed + 1);
        }
        if (e.keyCode == 80) { keysDown[e.keyCode] = false; }
    });

    viewport.screen = [document.getElementById('game').width,
    document.getElementById('game').height
    ];

    tileset = new Image();
    tileset.onerror = function () {
        ctx = null;
        alert("Failed loading tileset.");
    };
    tileset.onload = function () { tilesetLoaded = true; };
    tileset.src = tilesetURL;

    mapTileData.buildMapFromData(gameMap, mapW, mapH);

    mapTileData.map[((2 * mapW) + 2)].eventEnter = function () { console.log("Entered tile 2,2"); };
    //let mo1 = new MapObject(1); mo1.placeAt(2, 4); nakładanie
    // let pss = new this.PlacedItemStack(2, 1).placeAt(1, 2);
    // for (let i = 0; i < 5; i++) {
    //     let ps = new PlacedItemStack(1, 1);
    //     ps.placeAt(2, 1);
    //     ps.placeAt(2, 2);
    // }
    let ps1 = new PlacedItemStack(1, 1); ps1.placeAt(2, 2);
    let ps2 = new PlacedItemStack(1, 1); ps2.placeAt(4, 20);
    let ps3 = new PlacedItemStack(1, 1); ps3.placeAt(14, 20);

    let ps4 = new PlacedItemStack(1, 1); ps4.placeAt(1, 31);

    let ps5 = new PlacedItemStack(1, 1); ps5.placeAt(18, 29);

    let ps6 = new PlacedItemStack(1, 1); ps6.placeAt(18, 1);
    //używamy pętli żeby położyć te itemki do podniesienia
    //bardzo glupie, na szybko robie, zeby lety mialy zasieg tylko lokalnie...
    //usunalem petle
};


//koniec gry - player.position ma być [725, 1165]


function drawGame() {
    if (ctx == null) { return; }
    if (!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;
    gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

    var sec = Math.floor(Date.now() / 1000);
    if (sec != currentSecond) {
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    }
    else { frameCount++; }

    if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
        if (keysDown[38] && player.canMoveUp()) { player.moveUp(gameTime); }
        else if (keysDown[40] && player.canMoveDown()) { player.moveDown(gameTime); }
        else if (keysDown[37] && player.canMoveLeft()) { player.moveLeft(gameTime); }
        else if (keysDown[39] && player.canMoveRight()) { player.moveRight(gameTime); }
        else if (keysDown[80]) { player.pickUp(); }
    }

    viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2));

    var playerRoof1 = mapTileData.map[toIndex(
        player.tileFrom[0], player.tileFrom[1])].roof;
    var playerRoof2 = mapTileData.map[toIndex(
        player.tileTo[0], player.tileTo[1])].roof;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

    for (var z = 0; z < mapTileData.levels; z++) {

        for (var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
            for (var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
                if (z == 0) {
                    var tile = tileTypes[mapTileData.map[toIndex(x, y)].type];

                    var sprite = getFrame(tile.sprite, tile.spriteDuration,
                        gameTime, tile.animated);
                    ctx.drawImage(tileset,
                        sprite.x, sprite.y, sprite.w, sprite.h,
                        viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH),
                        tileW, tileH);
                }
                else if (z == 1) {
                    var is = mapTileData.map[toIndex(x, y)].itemStack;
                    if (is != null) {
                        var sprite = itemTypes[is.type].sprite;

                        ctx.drawImage(tileset,
                            sprite[0].x, sprite[0].y,
                            sprite[0].w, sprite[0].h,
                            viewport.offset[0] + (x * tileW) + itemTypes[is.type].offset[0],
                            viewport.offset[1] + (y * tileH) + itemTypes[is.type].offset[1],
                            sprite[0].w, sprite[0].h);
                    }
                }

                var o = mapTileData.map[toIndex(x, y)].object;
                // if (o != null && objectTypes[o.type].zIndex == z) {
                //     var ot = objectTypes[o.type];

                //     ctx.drawImage(tileset,
                //         ot.sprite[0].x, ot.sprite[0].y,
                //         ot.sprite[0].w, ot.sprite[0].h,
                //         viewport.offset[0] + (x * tileW) + ot.offset[0],
                //         viewport.offset[1] + (y * tileH) + ot.offset[1],
                //         ot.sprite[0].w, ot.sprite[0].h);
                // }
                //do skrzynek


            }
        }

        if (z == 1) {
            var sprite = player.sprites[player.direction];
            ctx.drawImage(tileset,
                sprite[0].x, sprite[0].y,
                sprite[0].w, sprite[0].h,
                viewport.offset[0] + player.position[0],
                viewport.offset[1] + player.position[1],
                player.dimensions[0], player.dimensions[1]);
        }

    }

    ctx.textAlign = "right";

    for (var i = 0; i < player.inventory.spaces; i++) {
        ctx.fillStyle = "#ddccaa";
        ctx.fillRect(10 + (i * 50), 350,
            40, 40);

        if (typeof player.inventory.stacks[i] != 'undefined') {
            var it = itemTypes[player.inventory.stacks[i].type];
            var sprite = it.sprite;

            ctx.drawImage(tileset,
                sprite[0].x, sprite[0].y,
                sprite[0].w, sprite[0].h,
                10 + (i * 50) + it.offset[0],
                350 + it.offset[1],
                sprite[0].w, sprite[0].h);

            if (player.inventory.stacks[i].qty > 1) {
                ctx.fillStyle = "#000000";
                ctx.fillText("" + player.inventory.stacks[i].qty,
                    10 + (i * 50) + 38,
                    350 + 38);
            }

            if (player.inventory.stacks[i].qty == 4) {
                const winText = document.querySelector('#win');
                winText.textContent = 'Wygrałeś!'
                winText.style.color = 'red';
                clearInterval(timeout);
                document.getElementById('time').textContent = "Ukończyłeś grę.";
                Character.prototype.canMoveTo = function () {
                    return false;
                }
            }
        }
    }
    ctx.textAlign = "left";

    ctx.fillStyle = "#ff0000";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
    // ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

    lastFrameTime = currentFrameTime;
    requestAnimationFrame(drawGame);
}