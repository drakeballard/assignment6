// alert("Welcome to the NFL Trivia Challenge");
$(function() {
  console.log("page loaded");
})


var searchArray = ["South Park", "Bob's Burger", "Archer", "Family Guy", " The Simpsons", "Futurama", "King of the Hill", "American Dad"];

function populateButtons(searchArray, classToAddm areaToAddTo) {
  $(areaToAddTo).empty();
  for(var i=o; i<searchArray.length;i++) {
    var a = $('<button>');
    a.addclass(classToAdd);
    a.attr('data-type',searchArray[i]);
    a.text(searchArray[i]);
    $(areaToAddTo).append(a);
  }
}
