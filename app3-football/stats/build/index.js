"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./inheritance/MatchReader");
const MatchReader_2 = require("./MatchReader");
const CsvReader_other_1 = require("./CsvReader_other");
console.log("Apps 3: Stats");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
const matches = reader.data;
console.log(matches[0]);
let wins = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] == MatchResult_1.MatchResult.HomeWin) {
        wins++;
    }
    else
        (match[2] === "Man United" && match[5] == MatchResult_1.MatchResult.AwayWin);
    {
        wins++;
    }
}
console.log(wins);
// Create object that satifies data with interface
const csvFileReader = new CsvReader_other_1.CsvFilerReader('football.csv');
const matchReader = new MatchReader_2.MatchReader(csvFileReader);
matchReader.load();
// now we can access matches
console.log(matchReader.matches[0]);
// Create instance of data match reader
