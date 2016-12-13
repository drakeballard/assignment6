// alert('Welcome to the NFL Trivia Challenge');
$(function() {
  populateButtons(searchArray,'searchButton','#buttonField')
  console.log('page loaded');
})


var searchArray = ['South Park', 'Bobs Burger', 'Archer', 'Family Guy', ' The Simpsons', 'Futurama', 'King of the Hill', 'American Dad'];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
  $(areaToAddTo).empty();
  for(var i=0; i<searchArray.length;i++) {
    var a = $('<button>');
    a.addClass(classToAdd);
    a.attr('data-type',searchArray[i]);
    a.text(searchArray[i]);
    $(areaToAddTo).append(a);
  }
}
