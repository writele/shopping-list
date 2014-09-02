$(document).ready(function () {
//Drag and drop items
      $(function() {
    $( ".sortable" ).sortable();
  });
//Add new items
    $("#additem")
      .click(function () {       
    var $value = $("#additemval").val();
    var $newitem = $("<div class='item'><h1>" + $value + "</h1><div class='btn'>Done!</div><div class='dlt'>Delete</div></div>");
    $("#list").append($newitem); 
//Mark item done and delete item (Button Events)
function buttonDone (event) {
    $(this).prev().toggleClass("done"); 
};    
function buttonDelete (event) {               
    $(this).parent().remove(); 
};
$(".btn")
        .on("click", buttonDone);
$(".dlt")
        .on("click", buttonDelete);
      
      }); 
});