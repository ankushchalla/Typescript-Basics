// Primitives
const msg:string = "hello"
const num:number = 1
const bool:boolean = true

const arr:Array<number> = [1,2,3,4,5] // Or const arr:number[] = [1,2,3,4,5] 

// any: Type checking won't occur. 
let obj:any = {
    x: 0
}
// Works just like js. 
obj = "hello"

// If you don't specify a type, and ts can't infer it, it defaults to any UNLESS you say noImplicitAny in config.

// Functions
// You don't usually need to specify return type, since TS can infer it. 
function getFavoriteNumber(): number {
    return 26;
}

// Union types: Creating new types out of other types. 
// You can only call methods available on BOTH types. 
function printId(id: number | string) {
    // This works, because we narrow the type through our code. 
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }
// Both are OK.
printId(101);
printId("202")

// Type aliases: Creating new types. 
type Point = {
    x: number;
    y: number;
}
function printCoord(pt: Point) {
    console.log(`Coordinates: (${pt.x}, ${pt.y})`);
}
printCoord({ x: 100, y: 100 });

// Interfaces: Very similar to type aliases. 
interface PointInterface {
    x: number;
    y: number;
}

function printCoordInterface(pt: PointInterface) {
    console.log(`Coordinates: (${pt.x}, ${pt.y})`);
}
printCoordInterface({ x: 100, y: 100 });

// For differences, see: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// Use interfaces until you need to use features from type. 

// TYPE ASSERTIONS: When you have more info about the type than TS. 
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
// ^ You know that myCanvas is not just any element, it's a HTMLCanvasElement

// You can combine literals using Unions to really narrow down stuff:
function printTest(s: "hello" | "Hola" | "Namaste") {
    console.log(s);
}

// printTest("bye") throws error