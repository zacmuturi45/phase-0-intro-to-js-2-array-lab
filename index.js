const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return `${cats.push(name)}`;
}
console.log(destructivelyAppendCat("Ralph"));


function destructivelyPrependCat(name) {
    return `${cats.unshift(name)}`;
}
console.log(destructivelyPrependCat("Bob"));

function destructivelyRemoveLastCat() {
    console.log(`${cats.pop()}`);
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    console.log(`${cats.shift()}`);
}
destructivelyRemoveFirstCat();

function appendCat() {
    return [...cats, "Broom"];
}
appendCat();


function prependCat() {
    return ["Arnold", ...cats];
}
prependCat();


function removeLastCat() {
    return cats.slice(0, 2);
}
removeLastCat();


function removeFirstCat() {
    return cats.slice(-2);
}
removeFirstCat();


