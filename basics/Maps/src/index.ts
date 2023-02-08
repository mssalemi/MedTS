import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

console.log("Creating User");
const user = new User();
console.log(user);

console.log("creating company");
const company = new Company();
console.log(company);

console.log("creating google map");
const map = new Map("map");
map.addMarker(user);
map.addMarker(company);
