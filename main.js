'use strict';

var pikePlace = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
  customersPerHour: [],
  //totalCookies: 0,
};

pikePlace.calculateCustomersPerHour = function() {
  for(var i = 0; i < 14; i++) {
    var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.customersPerHour.push(randomCust);
    console.log(' randomCust ' + randomCust);
  }
};

pikePlace.calculateCookiesSoldEachHour = function() {
  console.log(this);
  this.calculateCustomersPerHour();
  for(var i = 0; i < 14; i++) {
    var cookiesByTheHour = Math.round(this.avgCookiesPerSale * this.customersPerHour[i]);
    this.cookiesSoldEachHour.push(cookiesByTheHour);
    console.log(' cookiesByTheHour ' + this.cookiesSoldEachHour[i]);
  }
};

// pikePlace.sumTotalCookies = function() {
//   var totalCookies = 0;
//   for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
//     totalCookies += this.cookiesSoldEachHour[i];
//   }
//   console.log(' totalCookies ' + totalCookies);
// };

//console.log(pikePlace.sumTotalCookies);

pikePlace.renderHours = function() {
  this.calculateCookiesSoldEachHour();

  var locationsContainer = document.getElementById('Locations');
  //console.log(locationsContainer);
  var headerEl = document.createElement('h2');
  //console.log(headerEl);
  headerEl.textContent = this.name;
  locationsContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in this.cookiesSoldEachHour) {
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }

  locationsContainer.appendChild(ulEl);

  var totalCookies = 0;
  for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
    totalCookies += this.cookiesSoldEachHour[i];
  }
  console.log(' totalCookies ' + totalCookies);

  var listItemTotal = document.createElement('li');
  listItemTotal.textContent = 'Total Cookies: ' + totalCookies;
  listItemEl.appendChild(listItemTotal);
};

pikePlace.renderHours();


var seaTac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  cookiesSoldEachHour: [],
};

seaTac.calculateCustomersPerHour = function() {
  for(var i = 0; i < 14; i++) {
    var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomCust * this.avgCookiesPerSale);
  }
};

seaTac.calculateCookiesSoldEachHour = function() {
  console.log(this);
  for(var i = 0; i < 14; i++) {
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

seaTac.renderHours = function() {
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

seaTac.renderHours();

seaTac.calculateCookiesSoldEachHour();

// var seattleCenter = {
//   name: 'Seattle Center',
//   min: 11,
//   max: 38,
//   avgCookiesPerSale: 3.7,
//   cookiesSoldEachHour: [],
// };

// seattleCenter.calculateCustomersPerHour = function() {
//   var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   return Math.round(randomCust * this.avgCookiesPerSale);
// };

// seattleCenter.calculateCookiesSoldEachHour = function() {
//   console.log(this);
//   for(var i = 0; i < 14; i++) {
//     this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
//   }
// };

// seattleCenter.renderHours = function() {
//   this.calculateCookiesSoldEachHour();

//   var locationsContainer = document.getElementById('Locations');
//   console.log(locationsContainer);
//   var headerEl = document.createElement('h2');
//   console.log(headerEl);
//   headerEl.textContent = this.name;
//   locationsContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour) {
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   locationsContainer.appendChild(ulEl);
// };

// seattleCenter.renderHours();

// seattleCenter.calculateCookiesSoldEachHour();

// var capHill = {
//   name: 'Capitol Hill',
//   min: 20,
//   max: 38,
//   avgCookiesPerSale: 2.3,
//   cookiesSoldEachHour: [],
// };

// capHill.calculateCustomersPerHour = function() {
//   var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   return Math.round(randomCust * this.avgCookiesPerSale); 
// };

// capHill.calculateCookiesSoldEachHour = function() {
//   console.log(this);
//   for(var i = 0; i < 14; i++) {
//     this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
//   }
// };

// capHill.renderHours = function() {
//   this.calculateCookiesSoldEachHour();

//   var locationsContainer = document.getElementById('Locations');
//   console.log(locationsContainer);
//   var headerEl = document.createElement('h2');
//   console.log(headerEl);
//   headerEl.textContent = this.name;
//   locationsContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour) {
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   locationsContainer.appendChild(ulEl);
// };

// capHill.renderHours();

// capHill.calculateCookiesSoldEachHour();

// var alki = {
//   name: 'Alki',
//   min: 2,
//   max: 16,
//   avgCookiesPerSale: 4.6,
//   cookiesSoldEachHour: [],
// };

// alki.calculateCustomersPerHour = function() {
//   var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   return Math.round(randomCust * this.avgCookiesPerSale);
// };

// alki.calculateCookiesSoldEachHour = function() {
//   console.log(this);
//   for(var i = 0; i < 14; i++) {
//     this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
//   }
// };

// alki.renderHours = function() {
//   this.calculateCookiesSoldEachHour();

//   var locationsContainer = document.getElementById('Locations');
//   console.log(locationsContainer);
//   var headerEl = document.createElement('h2');
//   console.log(headerEl);
//   headerEl.textContent = this.name;
//   locationsContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour) {
//     var listItemEl = document.createElement('li');
//     listItemEl.textContent = this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   locationsContainer.appendChild(ulEl);
// };

// alki.renderHours();

// alki.calculateCookiesSoldEachHour();




