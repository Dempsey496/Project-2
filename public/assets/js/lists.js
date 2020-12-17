$(document).ready(function() {
    $("#view-lists-button").on("click", function(event) {
        var id = $(this).data("id");
        console.log("you viewed the lists!");
        
      });

    $(".create-list-submit").on("click", function(event) {
      var listCreator = $("#list-creator").val();
      var listName = $("#list-name").val();
      $.ajax({
        url:"/api/lists",
        method: "POST",
        data: {name:listName, creator:listCreator}
      }).then(function(response) {
        console.log(response)
        window.location.href="/lists";
      })
    });


});