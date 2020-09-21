function check(form) {
  if (form.userid.value == "odessa_user" && form.pwd.value == "odessa_user") {
    return true;
  } else {
    alert("Error Password or Username");
    return false;
  }
}
$(document).on("click", ".toggle-password", function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $("#password");
  input.attr("type") === "password"
    ? input.attr("type", "text")
    : input.attr("type", "password");
});
