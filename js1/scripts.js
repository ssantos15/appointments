$(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      var iName = $("#name").val();
      var iDescription = $("#description").val();
      var iDate = $("#date").val();
      var iTime = $("#time").val();

      alert("Hi " + iName + ", your appointment is booked for " + iDate + " at " + iTime + " thanks for booking with us!!");
    });
});
