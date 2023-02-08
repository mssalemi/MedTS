import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

console.log("Sorting - we out here");
const log = () => {
  console.log("Something");
};

const sorter = new NumbersCollection([-1, 5, 2, -15, 23, 1, -77]);
sorter.sort();
console.log(sorter.data);
