export interface Mapppable {
   location: {
      lat: number,
      lng: number
   };
   markerContent(): string;
}

export class CustomMap {
   private googleMap: google.maps.Map;

   constructor(public elementId: string) {
      this.googleMap = new google.maps.Map(document.getElementById(elementId) as Element, {
         zoom: 2,
         center: { lat: 0, lng: 0 }
      });
   }

   addMarker(mappable: Mapppable): void {
      const marker = new google.maps.Marker({
         map: this.googleMap,
         position: {
            lat: mappable.location.lat,
            lng: mappable.location.lng
         }
      });

      marker.addListener('click', () => {
         const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
         });
         infoWindow.open(this.googleMap, marker)
      })
   }
}