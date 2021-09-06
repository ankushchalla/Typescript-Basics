// Tuples
let person: [number, string, boolean] = [1, "hello", true]

// Union: When a variable can be multiple types. 
let id: string | number = 1234
id = "C-104"

// Enum: A set of named constants. Can be strings or numbers.
enum Direction1 {
    // By default have values of 0,1,2, etc. 
    Up = 1,
    Down = -1, 
    Left = 2, 
    Right = -2
}

// Objects
type User = {
    id: number, 
    age: string
}
let user: User = {
    id: 1, 
    age: '24'
}

// Casting
let cid: any = 1
let customerId = cid as number

// Interfaces
interface UserInterface {
    readonly id: number, 
    name: string,
    // optional
    age?: number
}
const user1: UserInterface = {
    id: 1, 
    name: 'Ankush',
}

interface MathFuncion {
    (x: number, y: number): number
}

const add: MathFuncion = (x: number, y: number): number => x + y

// Classes: Used to create objects.
class Person {
    private id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    hello(): string {
        return `Hello ${this.name}`
    }

    // Methods go here. 
}

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }

    // Has parent's register method. 
}

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

// With generics, numArray and stringArray of arrays of number, string. 
let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['ankush', 'bob', 'richard', 'rafael'])








