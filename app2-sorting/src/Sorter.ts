interface Sortable {
  length: number;
  swap(i: number, j: number): void;
  compare(i: number, j: number): boolean;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightindex: number): boolean;
  abstract swap(leftIndex: number, rightindex: number): void;
  abstract length: number;

  sort() {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
