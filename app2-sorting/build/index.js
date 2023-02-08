"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
console.log("Sorting - we out here");
const log = () => {
    console.log("Something");
};
const sorter = new NumbersCollection_1.NumbersCollection([-1, 5, 2, -15, 23, 1, -77]);
sorter.sort();
console.log(sorter.data);
