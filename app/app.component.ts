import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Welcome to SomethingIrish!</h1>
//   <h3> Our current favorite local brew is: {{ favoriteBeer }}</h3>
//   <h3> Current number of rotating taps: {{ rotatingTaps }} </h3>
//   <h3> Thursday Night Specials</h3>
//   <p> Thursday Night Event! {{ favoriteHouse.title }} </p>
//   <p> Happy Hour Treats {{ favoriteHouse.food }}</p>
//   <p> Hours {{favoriteHouse.hours}}</p>
//
//   <h1> IPA's </h1>
//   <div class="ipa" *ngFor="let currentIpa of favoriteIpa">
//   <p> {{currentIpa}} </p>
//   </div>
// <br />
// <br  />
// <br  />
//   <h1> Stouts </h1>
//   <div class="stouts" *ngFor="let currentStout of favoriteStout">
//   <p> {{currentStout}} </p>
//     </div>
// <br  />
// <br  />
//     <h1> Lager </h1>
//     <div class="lager" *ngFor="let currentLager of favoriteLager">
//     <p> {{currentLager}} </p>
//       </div>
//       <br  />
//       <br  />
//       <br  />
//      <h3> Upcoming Events! </h3>
//      <div class="events" *ngFor="let event of events">
//      <p>{{event.title}}</p>
//      <p> {{event.food}}</p>
//      <p> {{event.hours}}</p>
//   </div>
  <h3 (click)="doStuff(currentKeg)" *ngFor="let currentKeg of Keg"> {{currentKeg.description}}</h3>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[] = [
    new Keg("Caldera", "45 Dollars", 24),
    new Keg("Lompoc", "89 Dollars", 40),
    new Keg("Lucky Lab", "Free", 25)
    ];
    doStuff() {
      alert("You Picked a Keg!");
    }
  }
// favoriteBeer: string = 'Liam Nessons IPA';
// rotatingTaps: number= 75;
// favoriteHouse: House = new House("Danny Boy Sing-a-long", "The Famine Alehouse Burger", "9-12");
// favoriteIpa: string [] = ["Blondie", "Stumptown", "Caldera"];
// favoriteStout: string [] = [" Lompoc Sockeye Cream Stout", "Tugboat Chernobyl Stout", "Lucky Lab Black Wheat Stout"];
// favoriteLager: string [] = ["Base Camp Brewing Lager", "HopWorks Lager", "Prost! Lager"];
// events: Event[] = [
// new Event("Monday's", "Potato Stew Cook off", "7pm-3am"),
// new Event("Friday's", "Poutine Happy Hour", "8pm-4am"),
// new Event("Every First Thursday", "Ladies Drink Free", "All Day")
//   ];
// }
//
//
//
//
// export class House{
// constructor (public title: string, public food: string, public hours: string) { }
// }
//
// export class Event{
//   constructor (public title: string, public food: string, public hours: string) { }
// }
//
// export class Keg{
//   constructor (public brand: string, public price: string, public alcohol: number) { }
// }

  export class Keg {
    public done: boolean = false;
      constructor(public description: string, public id: number) { }
}
