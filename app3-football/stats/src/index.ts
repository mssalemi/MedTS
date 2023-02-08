import { MatchResult } from "./MatchResult";
import { MatchReader } from "./inheritance/MatchReader";

import { MatchReader as MatchReader_other } from "./MatchReader";
import { CsvFilerReader } from "./CsvReader_other";

console.log("Apps 3: Stats");

const reader = new MatchReader('football.csv');
reader.read();
const matches = reader.data;
console.log(matches[0])

let wins = 0;
for (let match of matches) {
  if (match[1] === "Man United" && match[5] == MatchResult.HomeWin) {
    wins++;
  } else (match[2] === "Man United" &&  match[5] == MatchResult.AwayWin) {
    wins++
  }
}
console.log(wins)

// Create object that satifies data with interface
const csvFileReader = new CsvFilerReader('football.csv');
const matchReader = new MatchReader_other(csvFileReader);
matchReader.load();
// now we can access matches
console.log(matchReader.matches[0])

// Create instance of data match reader