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
  storeTableRowEl.appendChild(storeTableHeadEl);
  //create row data
  for(var i = 0; i < this.cookiesSoldEachHour.length; i++) {
    var storeTableRowDataEl = document.createElement('td');
    storeTableRowDataEl.textContent = this.cookiesSoldEachHour[i];
    storeTableRowEl.appendChild(storeTableRowDataEl);
  }
  storeTableEl.appendChild(storeTableRowEl);
  //header row
  for(var i = 0; i < 14; i++) {
    var storeTableHeader = document.createElement('thead');
    storeTableHeader.textContent = this.hoursOfOperation[i];
    
  }
  storeTableEl.appendChild(storeTableHeader);
};



//Declaring my objects
var pikePlace = new SalmonCookiesStoreConstructor('1st and Pike', 23, 65, 6.3);
var seaTac = new SalmonCookiesStoreConstructor('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new SalmonCookiesStoreConstructor('Seattle Center', 11, 38, 3.7);
var capHill = new SalmonCookiesStoreConstructor('Capitol Hill', 20, 38, 2.3);
var alki = new SalmonCookiesStoreConstructor('Alki', 2, 16, 4.6);

//locations array
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

//new store form
var newLocationForm = document.getElementById('new-store-form');
var bodyEl = document.getElementById('body');


var newLocationHandler = function(event) {
  event.preventDefault();
  event.stopPropagation();

  var locationName = event.target['location'].value;
  var minCustomersHr = event.target['min-customers-hour'].value;
  var maxCustomersHr = event.target['max-customers-hour'].value;
  var avgCookiesPerSale = event.target['cookies-per-sale'].value;

  var newLocation = new SalmonCookiesStoreConstructor(locationName, minCustomersHr, maxCustomersHr, avgCookiesPerSale);
  locations.push(newLocation);
  
};

bodyEl.addEventListener('click', function(event){
  console.log('working?');
});

newLocationForm.addEventListener('sumbit', newLocationHandler);
