function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$("table").on("click", "tr.parent .fa-chevron-down", function () {
  $(this).closest("tbody").toggleClass("open");
});
