// ARRAYS
// arrays are consistent of one type

// const carMakers = ['ford', 'toyota', 'chevy'];
const carMarkers: string[] = [];

const datesWithActivity: {
  activity: string;
  date: Date;
}[] = [];

datesWithActivity.push({
  activity: 'Camping',
  date: new Date(),
});

const names = ['Mehdi', 'Bianca', 'Aspen'];
names.map((car: string): string => {
  return car;
});

// Multiple Types in Array
const importantDates: (Date | string)[] = [new Date()];
