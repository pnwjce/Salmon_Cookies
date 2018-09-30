'use strict';

//Constructor function
var SalmonCookieStore = function(name, min, max, avgCookiesPerSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  //this.cookiesSoldEachHour = cookiesSoldEachHour;
  //this.customersPerHour = customersPerHour;
};

//Objects
var pikePlace = new SalmonCookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new SalmonCookieStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new SalmonCookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new SalmonCookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new SalmonCookieStore('Alki', 2, 16, 4.6);

console.log(pikePlace, seaTac, seattleCenter, capHill, alki);


// pikePlace.calculateCustomersPerHour = function() {
//   for(var i = 0; i < 14; i++) {
//     var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     this.customersPerHour.push(randomCust);
//     console.log(' randomCust ' + randomCust);
//   }
// };

// pikePlace.calculateCookiesSoldEachHour = function() {
//   console.log(this);
//   this.calculateCustomersPerHour();
//   for(var i = 0; i < 14; i++) {
//     var cookiesByTheHour = Math.round(this.avgCookiesPerSale * this.customersPerHour[i]);
//     this.cookiesSoldEachHour.push(cookiesByTheHour);
//     console.log(' cookiesByTheHour ' + this.cookiesSoldEachHour[i]);
//   }
// };

// pikePlace.renderHours = function() {
//   this.calculateCookiesSoldEachHour();

//   var locationsContainer = document.getElementById('Locations');
//   var headerEl = document.createElement('h2');
//   headerEl.textContent = this.name;
//   locationsContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour) {
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   locationsContainer.appendChild(ulEl);

//   var totalCookies = 0;
//   for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
//     totalCookies += this.cookiesSoldEachHour[i];
//   }
//   console.log(' totalCookies ' + totalCookies);

//   var listItemTotal = document.createElement('li');
//   listItemTotal.textContent = 'Total Cookies: ' + totalCookies;
//   listItemEl.appendChild(listItemTotal);
// };

// pikePlace.renderHours();

// var seaTac = {
//   name: 'SeaTac Airport',
//   min: 3,
//   max: 24,
//   avgCookiesPerSale: 1.2,
//   cookiesSoldEachHour: [],
//   customersPerHour: [],
// };

// seaTac.calculateCustomersPerHour = function() {
//   for(var i = 0; i < 14; i++) {
//     var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     this.customersPerHour.push(randomCust);
//     console.log(' randomCust ' + randomCust);
//   }
// };

// seaTac.calculateCookiesSoldEachHour = function() {
//   console.log(this);
//   this.calculateCustomersPerHour();
//   for(var i = 0; i < 14; i++) {
//     var cookiesByTheHour = Math.round(this.avgCookiesPerSale * this.customersPerHour[i]);
//     this.cookiesSoldEachHour.push(cookiesByTheHour);
//     console.log(' cookiesByTheHour ' + this.cookiesSoldEachHour[i]);
//   }
// };

// seaTac.renderHours = function() {
//   this.calculateCookiesSoldEachHour();

//   var locationsContainer = document.getElementById('Locations');
//   var headerEl = document.createElement('h2');
//   headerEl.textContent = this.name;
//   locationsContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour) {
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   locationsContainer.appendChild(ulEl);

//   var totalCookies = 0;
//   for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
//     totalCookies += this.cookiesSoldEachHour[i];
//   }
//   console.log(' totalCookies ' + totalCookies);

//   var listItemTotal = document.createElement('li');
//   listItemTotal.textContent = 'Total Cookies: ' + totalCookies;
//   listItemEl.appendChild(listItemTotal);
// };

// seaTac.renderHours();

// var seattleCenter = {
//   name: 'Seattle Center',
//   min: 11,
//   max: 38,
//   avgCookiesPerSale: 3.7,
//   cookiesSoldEachHour: [],
//   customersPerHour: [],
// };

// seattleCenter.calculateCustomersPerHour = function() {
//   for(var i = 0; i < 14; i++) {
//     var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     this.customersPerHour.push(randomCust);
//     console.log(' randomCust ' + randomCust);
//   }
// };

// seattleCenter.calculateCookiesSoldEachHour = function() {
//   console.log(this);
//   this.calculateCustomersPerHour();
//   for(var i = 0; i < 14; i++) {
//     var cookiesByTheHour = Math.round(this.avgCookiesPerSale * this.customersPerHour[i]);
//     this.cookiesSoldEachHour.push(cookiesByTheHour);
//     console.log(' cookiesByTheHour ' + this.cookiesSoldEachHour[i]);
//   }
// };

// seattleCenter.renderHours = function() {
//   this.calculateCookiesSoldEachHour();

//   var locationsContainer = document.getElementById('Locations');
//   var headerEl = document.createElement('h2');
//   headerEl.textContent = this.name;
//   locationsContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour) {
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   locationsContainer.appendChild(ulEl);

//   var totalCookies = 0;
//   for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
//     totalCookies += this.cookiesSoldEachHour[i];
//   }
//   console.log(' totalCookies ' + totalCookies);

//   var listItemTotal = document.createElement('li');
//   listItemTotal.textContent = 'Total Cookies: ' + totalCookies;
//   listItemEl.appendChild(listItemTotal);
// };

// seattleCenter.renderHours();

// var capHill = {
//   name: 'Capitol Hill',
//   min: 20,
//   max: 38,
//   avgCookiesPerSale: 2.3,
//   cookiesSoldEachHour: [],
//   customersPerHour: [],
// };

// capHill.calculateCustomersPerHour = function() {
//   for(var i = 0; i < 14; i++) {
//     var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     this.customersPerHour.push(randomCust);
//     console.log(' randomCust ' + randomCust);
//   }
// };

// capHill.calculateCookiesSoldEachHour = function() {
//   console.log(this);
//   this.calculateCustomersPerHour();
//   for(var i = 0; i < 14; i++) {
//     var cookiesByTheHour = Math.round(this.avgCookiesPerSale * this.customersPerHour[i]);
//     this.cookiesSoldEachHour.push(cookiesByTheHour);
//     console.log(' cookiesByTheHour ' + this.cookiesSoldEachHour[i]);
//   }
// };

// capHill.renderHours = function() {
//   this.calculateCookiesSoldEachHour();

//   var locationsContainer = document.getElementById('Locations');
//   var headerEl = document.createElement('h2');
//   headerEl.textContent = this.name;
//   locationsContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour) {
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   locationsContainer.appendChild(ulEl);

//   var totalCookies = 0;
//   for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
//     totalCookies += this.cookiesSoldEachHour[i];
//   }
//   console.log(' totalCookies ' + totalCookies);

//   var listItemTotal = document.createElement('li');
//   listItemTotal.textContent = 'Total Cookies: ' + totalCookies;
//   listItemEl.appendChild(listItemTotal);
// };

// capHill.renderHours();

// var alki = {
//   name: 'Alki',
//   min: 2,
//   max: 16,
//   avgCookiesPerSale: 4.6,
//   cookiesSoldEachHour: [],
//   customersPerHour: [],
// };

// alki.calculateCustomersPerHour = function() {
//   for(var i = 0; i < 14; i++) {
//     var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     this.customersPerHour.push(randomCust);
//     console.log(' randomCust ' + randomCust);
//   }
// };

// alki.calculateCookiesSoldEachHour = function() {
//   console.log(this);
//   this.calculateCustomersPerHour();
//   for(var i = 0; i < 14; i++) {
//     var cookiesByTheHour = Math.round(this.avgCookiesPerSale * this.customersPerHour[i]);
//     this.cookiesSoldEachHour.push(cookiesByTheHour);
//     console.log(' cookiesByTheHour ' + this.cookiesSoldEachHour[i]);
//   }
// };

// alki.renderHours = function() {
//   this.calculateCookiesSoldEachHour();

//   var locationsContainer = document.getElementById('Locations');
//   var headerEl = document.createElement('h2');
//   headerEl.textContent = this.name;
//   locationsContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour) {
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   locationsContainer.appendChild(ulEl);

//   var totalCookies = 0;
//   for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
//     totalCookies += this.cookiesSoldEachHour[i];
//   }
//   console.log(' totalCookies ' + totalCookies);

//   var listItemTotal = document.createElement('li');
//   listItemTotal.textContent = 'Total Cookies: ' + totalCookies;
//   listItemEl.appendChild(listItemTotal);
// };

// alki.renderHours();

