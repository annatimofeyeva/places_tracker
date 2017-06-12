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
 /*Destination.prototype.fullDestination = function() {
   return this.cityName + ", " + this.countryName;
 }*/
function resetFields() {
  $("#new-city-name").val("");
  $("#new-country-name").val("");
  $("#new-season-name").val("");
  $("#new-thing").val("");
}

//user interface logic

$(document).ready(function(){

  $("#add-thing-name").click(function() {
      $(".new-thing").append('<div class="">' +
                                   '<div class="form-group new-thing">' +
                                     '<label for="new-thing">Things to do</label>' +
                                     '<input type="text" class="form-control" id="new-thing">' +
                                   '</div>');
});
  $("form#new-location").submit(function(event){
  event.preventDefault();

  var inputtedSeasonName = $("#new-season-name").val();
  var inputtedThingName = $("#new-thing").val();

  var newTracker = new Tracker(inputtedSeasonName, inputtedThingName);
  console.log(newTracker);
  $(".city_country").each(function(){
  var inputtedCityName = $("input#new-city-name").val();
  var inputtedCountryName = $("input#new-country-name").val();
  var newDestination = new Destination (inputtedCityName, inputtedCountryName);
  //newTracker.locationName.push(newDestination);

  });

$("ul#list").append("<li><span class='contact'>" + newDestination.inputtedCityName + "</span></li>");


$(".contact").last().click(function() {
      $("#show-contact").show();
      //$("#show-contact h3").text(newTracker.fullDestination());
      $("#new-city-name").text(newDestination.cityName);
      $("#new-country-name").text(newDestination.countryName);
      $("#new-season-name").text(newTracker.seasonName);
      $("ul#new-thing").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#places").append("<li>" + newTracker.thingsName + "</li>");
      });
    });

    resetFields();

  });
});
