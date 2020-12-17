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
  
  $(".delete-list").on("click", function() {
    const id = $(this).data("id");
    $.ajax({
      url:`/api/del-lists/${id}`,
      method: "DELETE",
    }).then(function(response) {
      console.log(response)
    })
  });
});