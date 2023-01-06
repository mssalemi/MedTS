// annotate the function variable
const addToNumber: (i: number) => number = (i) => {
  return i + 1;
};

// or annotate the function itself
const addToNumber2 = (i: number): number => {
  return i + 1;
};

const addNumbers = (a: number, b: number): number => a + b;

// Non-arrow function syntax
function addToNumber3(i: number): number {
  return i + 1;
}

// Void / Never Type

// Void returns nothing or undefined
const logger = (message: string): void => {
  console.log(message);
};

// Never going to reach the end of the function (EX - error gets throw)
// only annotate type with error if it will always return nothing
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrorButNot = (message: string): string => {
  throw new Error(message);
  return '123';
};

// destructuring
const forecast = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.weather);
  console.log(forecast.date);

  // destrcutre
  const { date, weather } = forecast;
  console.log(date, weather);
};

logWeather(forecast);

// or similary
const logWeather2 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(weather);
};

// Around Objects
const profile = {
  name: 'Alex',
  age: 20,
  cords: {
    lat: 123,
    long: 321,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  age,
  cords: { lat, long },
} = profile;
// Full annotation below
const {
  age: age2,
  cords: { lat: lat2, long: lng },
}: { age: number; cords: { lat: number; long: number } } = profile;
