'use strict';

var pikePlace = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

pikePlace.calculateCustomersPerHour = function() {
  var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return randomCust * this.avgCookiesPerSale;
}

console.log(pikePlace.calculateCustomersPerHour());

var seaTac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  cookiesSoldEachHour: [],
};

seaTac.calculateCustomersPerHour = function() {
  var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return randomCust * this.avgCookiesPerSale;
}

console.log(seaTac.calculateCustomersPerHour());

var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
};

seattleCenter.calculateCustomersPerHour = function() {
  var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return randomCust * this.avgCookiesPerSale;
}

console.log(seattleCenter.calculateCustomersPerHour());

var capHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookiesPerSale: 2.3,
  cookiesSoldEachHour: [],
};

capHill.calculateCustomersPerHour = function() {
  var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return randomCust * this.avgCookiesPerSale;
}

console.log(capHill.calculateCustomersPerHour());

var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookiesPerSale: 4.6,
  cookiesSoldEachHour: [],
};

alki.calculateCustomersPerHour = function() {
  var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return randomCust * this.avgCookiesPerSale;
}

console.log(alki.calculateCustomersPerHour());


