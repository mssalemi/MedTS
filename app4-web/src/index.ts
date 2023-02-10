import { User } from "./models/User";

console.log("heyeee");

// const user = new User({ name: "Mehdi", age: 32 });
// console.log(user.get("name"));
// console.log(user.get("age"));

// user.on("change", () => {
//   console.log("change 1");
// });
// user.on("change", () => {
//   console.log("change 2");
// });
// user.on("save", () => {
//   console.log("save 1");
// });

// console.log(user.events);

// user.trigger("save");

const user2 = new User({ id: 1 });
console.log(user2.get("id"));
user2.fetch();
console.log(user2);

user2.set({ name: "Mehdi", age: 999 });
user2.save();

const user3 = new User({ age: 15 });
user3.save();
