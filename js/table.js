function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

jQuery('button').click(function() {
  jQuery(this).parents('tr')
      .closest('tbody')
      .next('.section')
      .toggle('slow');
});