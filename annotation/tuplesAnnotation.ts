// Tuples are similar to array, but each element represent some property of a record
// order of tuple has very specific meaning
// (age, name, location)
// (12, "Mehdi", "Canada")

const obj = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const tup: [string, boolean, number] = ['brown', true, 40];

// Or do it with type alias
type Drink = [string, boolean, number];
const tup2: Drink = ['green', false, 100];
