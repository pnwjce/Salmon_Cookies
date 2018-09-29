'use strict';

var pikePlace = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
  customersPerHour: [],
  //totalCookies = 0
};

pikePlace.calculateCustomersPerHour = function() {
  var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomCust * this.avgCookiesPerSale);
};

pikePlace.calculateCookiesSoldEachHour = function() {
  console.log(this);
  for(var i = 0; i < 14; i++) {
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

pikePlace.renderHours = function() {
  this.calculateCookiesSoldEachHour();

  var locationsContainer = document.getElementById('Locations');
  console.log(locationsContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name;
  locationsContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in this.cookiesSoldEachHour) {
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }

  locationsContainer.appendChild(ulEl);
};

pikePlace.renderHours();

pikePlace.calculateCookiesSoldEachHour();

// var seaTac = {
//   name: 'SeaTac Airport',
//   min: 3,
//   max: 24,
//   avgCookiesPerSale: 1.2,
//   cookiesSoldEachHour: [],
//   totalCookies = 0
// };

// seaTac.calculateCustomersPerHour = function() {
//   var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   return Math.round(randomCust * this.avgCookiesPerSale);
// };

// console.log(seaTac.calculateCustomersPerHour());

// var seattleCenter = {
//   name: 'Seattle Center',
//   min: 11,
//   max: 38,
//   avgCookiesPerSale: 3.7,
//   cookiesSoldEachHour: [],
//   totalCookies = 0
// };

// seattleCenter.calculateCustomersPerHour = function() {
//   var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   return Math.round(randomCust * this.avgCookiesPerSale);
// };

// console.log(seattleCenter.calculateCustomersPerHour());

// var capHill = {
//   name: 'Capitol Hill',
//   min: 20,
//   max: 38,
//   avgCookiesPerSale: 2.3,
//   cookiesSoldEachHour: [],
//   totalCookies = 0
// };

// capHill.calculateCustomersPerHour = function() {
//   var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   return Math.round(randomCust * this.avgCookiesPerSale); 
// };

// console.log(capHill.calculateCustomersPerHour());

// var alki = {
//   name: 'Alki',
//   min: 2,
//   max: 16,
//   avgCookiesPerSale: 4.6,
//   cookiesSoldEachHour: [],
//   totalCookies = 0
// };

// alki.calculateCustomersPerHour = function() {
//   var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   return Math.round(randomCust * this.avgCookiesPerSale);
// };

// console.log(alki.calculateCustomersPerHour());


