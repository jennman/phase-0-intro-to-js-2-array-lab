// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
cats;

function destructivelyAppendCat(name){
   cats.push(name);
   return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    cats;
}

function appendCat(name){
    const newCats = [name, ...cats];
    return newCats;
}