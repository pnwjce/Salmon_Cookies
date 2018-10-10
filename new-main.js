'use strict';

var SalmonCookiesStoreConstructor = function (name, min, max, avgCookiesPerSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesSoldEachHour = [];
  this.hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10;00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
};

SalmonCookiesStoreConstructor.prototype.calculateCustomersPerHour = function () {
  for(var i = 0; i < this.hoursOfOperation.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    var cookiesByTheHour = Math.round(this.avgCookiesPerSale * randomCust);
    this.cookiesSoldEachHour.push(cookiesByTheHour);
  }
};

var pikePlace = new SalmonCookiesStoreConstructor('1st and Pike', 23, 65, 6.3);

console.log(pikePlace);

pikePlace.calculateCustomersPerHour();

console.log(pikePlace);


