import { Point } from "./point";

/* function log(message){
    console.log(message);
}

var message = 'Hello World';

log(message);

var number = 1;
let count = 2; */

// let - it use to declare var inside the block
// var - the var can be used outside the block  

/* function doSomething() {
    for(var i = 0 ; i < 5 ; i++)
    {
        console.log(i);
    }

    console.log('Finally : ' + i);
}

doSomething(); */
/* 
let count = 5;
count = 'a';          // in js we don t have this problem */

/* let a; // let a: number;  let a: boolean; let a: string; let d: any; let e: number[] = [1,2,3]; let f: any[] = [1, true, 'a', false];

a = 1;
a = true;
a = 'a';   */

/* const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;      vanilla java */

/* enum Color {Red = 0, Green = 1 , Blue = 2 , Purple = 3};
let backColor = Color.Red;                                             ---- TypeScript ---- */


                                                                          // --- vs -----
/* (function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));

var backColor = Color.Red;                                              ------  Java Script ------*/


/* let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c'); */

/* let log = function(message) {
      console.log(message);
}

let doLog = (message) => console.log(message); // in C# -> lambda expression , in typeScript arrow function
 */


/* let drawPoint = (x,y) => {

}

let drawPointts = (point: { x : number , y : number }) => {  // {inline addnotation} -> objects 
    //..
}

drawPointts({
    x:1,
    y:2
}) */

/* interface Point {
    x: number,
    y: number,

    draw: () => void     // interfaces contains just sing..
}

   let drawPointWithInt = (point: Point) => {
    //...
}

    let getdistance = (pointA: Point, pointB: Point) => {
        // violated the Cohesion 
    }
*/

/* class Point {
    x: number;
    y: number;
   

    draw(){
        //add login
        console.log(`x: ${this.x} y: ${this.y}`);
    }

    getDistance(another: Point) {
            //...
    }
}


let point = new Point;

point.x = 1;
point.y = 2;

point.draw(); */

/* class Point {
   // private x: number;
   // private y: number;

    constructor(private _x: number ,private _y: number){}

    getX(){
        this._x;
    }

    get x() {
       return this._x; 
    }

    set x(value) {
        if(value < 0){
            throw new Error('value cannot be less than 0.');
        }else{
            this._x = value;
        }
    }
   
    setX(value){
        if(value < 0){
            throw new Error('value cannot be less than 0.');
        }else{
            this.x = value;
        }
    } 
    
    getY(){
        this._y;
    }

    draw() {
        console.log(`X: ${this._x} | Y: ${this._y}`);
    }

}


let point = new Point(1,2);
//let x = point.getX();

// point.setX(10);

point.x = 10;

point.draw(); */

let point = new Point(1,2);

point.draw();