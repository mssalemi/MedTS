// REplacement for long type annotations

interface Car extends Reportable {
  name: string;
  year: number;
  broken: boolean;
  lastService: Date;
}

interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

const oldCivic: Car = {
  name: 'Civic',
  year: 2000,
  broken: true,
  lastService: new Date(),
  summary(): string {
    return `${this.year} - ${this.name} is ${
      this.broken ? 'broken' : 'working'
    }.`;
  },
};

printSummary(oldCivic);

interface Drink extends Reportable {
  color: string;
  carbonated: boolean;
  sugar: number;
}

const coke = {
  color: 'dark-brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return 'COKE';
  },
};

printSummary(coke);
