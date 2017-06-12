//business logic

function Tracker(season, things){
  this.locationName = [];
  this.seasonName = season;
  this.thingsName = things;
  }
function Destination(city, country){
  this.cityName = city;
  this.countryName = country;
}
 Destination.prototype.fullDestination = function(){
   return this.cityName + ", " + this.countryName;
}
function resetFields() {
  $("#new-city-name").val("");
  $("#new-country-name").val("");
  $("#new-season-name").val("");
  $("#add-thing-name").val("");
}

//user interface logic

$(document).ready.(function(){
  $("#go_button").submit(function(event){
  event.preventDefault();

  var inputtedCityName= ("input#new-city-name").val();
  var inputtedCountryName = ("input#new-country-name").val();
  var inputtedSeasonName = ("input#new-season-name").val();
  var inputtedThingName = ("input#add-thing-name").val();

  var newTracker = new Tracker(inputtedSeasonName, inputtedThingName);

  }



}
