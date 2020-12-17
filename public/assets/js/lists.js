$(document).ready(function() {
  $(".create-list-submit").on("click", function(event) {
    var listCreator = $("#list-creator").val();
    var listName = $("#list-name").val();
    $.ajax({
      url:"/api/lists",
      method: "POST",
      data: {name:listName, creator:listCreator}
    }).then(function(response) {
      console.log(response)
    })
  });
  $("#delete-button").on("click", function(event) {
    $.ajax({
      url:"/api/lists/:id",
      method: "DELETE",
      where: {
        id: req.params.id,
      },
    }).then(function(response) {
      console.log(response)
    })
  });
});