/// <reference types="@types/google.maps" />
// ^ these reference's are needed when you include global variables directly in the html file
// so it can be accessed here
import { User } from "./User";
import { Company } from "./Company";

export class Map {
  private googleMap: google.maps.Map;
  addMarker(mappable: User | Company) {
    console.log("Adding Marker");
    console.log(mappable);
    const markerOptions: google.maps.MarkerOptions = {
      map: this.googleMap,
      position: mappable.location,
    };

    const marker = new google.maps.Marker(markerOptions);
    marker.addListener("click", () => {
      const content = mappable.markerContent();
      const infoWindow = new google.maps.InfoWindow({
        content,
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
  constructor(divId: string) {
    console.log("Hello google, creating map with: ", google);
    const googleMap = document.getElementById(divId)!;
    const mapOptions = {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    };
    this.googleMap = new google.maps.Map(googleMap, mapOptions);
  }
}
