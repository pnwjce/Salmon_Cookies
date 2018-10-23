'use strict';
//Global variable
var SalmonCookiesStoreConstructor = function (name, min, max, avgCookiesPerSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesSoldEachHour = [];
  this.hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10;00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
};


//Prototypes
SalmonCookiesStoreConstructor.prototype.calculateCustomersPerHour = function () {
  for(var i = 0; i < this.hoursOfOperation.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    var cookiesByTheHour = Math.round(this.avgCookiesPerSale * randomCust);
    this.cookiesSoldEachHour.push(cookiesByTheHour);
  }
};

SalmonCookiesStoreConstructor.prototype.renderAsTableRow = function () {
  this.cookiesSoldEachHour;
  var storeTableEl = document.getElementById('storetable');
  console.log(storeTableEl);
  //create table row
  var storeTableRowEl = document.createElement('tr');
  console.log(storeTableRowEl);
  //create header row
  var storeTableHeadEl = document.createElement('th');
  storeTableHeadEl.textContent = this.name;
  storeTableEl.appendChild(storeTableHeadEl);
  //create row data
  var storeTableRowDataEl = function () {
    for(var i = 0; i < 14; i++) {
      var storeTableRowDataEl = document.createElement('td');
      storeTableRowDataEl.textContent = this.cookiesSoldEachHour[i];
      storeTableEl.appendChild(storeTableRowDataEl);
    }
  };
  storeTableRowDataEl();

};

//Declaring my objects
var pikePlace = new SalmonCookiesStoreConstructor('1st and Pike', 23, 65, 6.3);
var seaTac = new SalmonCookiesStoreConstructor('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new SalmonCookiesStoreConstructor('Seattle Center', 11, 38, 3.7);
var capHill = new SalmonCookiesStoreConstructor('Capitol Hill', 20, 38, 2.3);
var alki = new SalmonCookiesStoreConstructor('Alki', 2, 16, 4.6);

var locations = [pikePlace, seaTac, seattleCenter, capHill, alki];

for(var i = 0; i < locations.length; i++) {
  locations[i].calculateCustomersPerHour();
  console.log(locations[i]);
}

pikePlace.renderAsTableRow();
seaTac.renderAsTableRow();
seattleCenter.renderAsTableRow();
capHill.renderAsTableRow();
alki.renderAsTableRow();


// var renderHours = function() {
//   var storeTableEl = document.getElementById('storetable');
//   var storeTableBodyEl = document.createElement('table');
//   var storeTableBodyRowEl = document.createElement('tr');
//   var storeTableBodyHeadEl = document.createElement('th');
//   storeTableBodyHeadEl.textContent = locations;
//   storeTableBodyRowEl.appendChild(storeTableBodyHeadEl);
//   var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10;00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
//   for(var i = i; i < hoursOfOperation.length[i]; i++) {
//     storeTableBodyHeadEl = document.createElement('th');
//     storeTableBodyHeadEl.textContent = hoursOfOperation[i];
//     storeTableBodyRowEl.appendChild(storeTableBodyHeadEl);
//   }

//   storeTableBodyRowEl.appendChild(storeTableBodyHeadEl);
//   storeTableBodyEl.appendChild(storeTableBodyRowEl);
//   storeTableEl.appendChild(storeTableBodyEl);
// };

// renderHours();

