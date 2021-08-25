// TYPE GAURDS
function padLeft(padding:number | string, input: string) {
    if (typeof padding === "number") { // This is a type gaurd. 
        // Hover over padding: it's a number.
        return padding + 1
    }
    // Hover over padding: it's a string!
    return padding + input;
}
// Narrowing: Refining types to more specific types than declared. 
// There are many ways to do this, see docs: https://www.typescriptlang.org/docs/handbook/2/narrowing.html