// Explicit types
function greet (person: String, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString}!`);
}

// greet("Ankush", Date()); Benefits of ts: TS will report a bug here because Date() returns a String. 
greet("Ankush", new Date())

// TS can infer (figure out) types sometimes. 
let message = "hello there!"; // hover over msg to see type. 
