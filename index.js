// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
//adds to end of array
function destructivelyAppendCat(name) {
    cats.push(name);
}
//adds to beginning of array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
//Everything below is nondestructive array manipulation
function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}