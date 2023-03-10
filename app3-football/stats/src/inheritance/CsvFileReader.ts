import fs from "fs";

export abstract class CsvFilerReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((string): string[] => string.split(","))
      .map(this.mapRow);
  }
}
