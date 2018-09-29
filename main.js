'use strict';

var pikePlace = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

pikePlace.calculateCustomersPerHour = function() {
  var randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
}

var seaTac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  cookiesSoldEachHour: [],
};

var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
};

var capHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookiesPerSale: 2.3,
  cookiesSoldEachHour: [],
};

var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookiesPerSale: 4.6,
  cookiesSoldEachHour: [],
};
