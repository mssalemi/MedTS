import { faker } from "@faker-js/faker";
import { Mappable } from "./Mappable";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return this.name + " lives here";
  }
  constructor() {
    this.name = faker.name.firstName() + " " + faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
