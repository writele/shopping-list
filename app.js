$(document).ready(function () {
    
      $(function() {
    $( ".sortable" ).sortable();
  });
    
    $("#additem")
      .click(function () {
          
    var $value = $("#additemval").val();
    var $newitem = $("<div class='item'><h1>" + $value + "</h1><div class='btn'>Done!</div><div class='dlt'>Delete</div></div>");
    //on button click, add item variable
    $("#list").append($newitem); 
      });
    
    //on done click, strikethough item
    $(".btn")
        .on("click", function () {      $(this).prev().toggleClass("done"); 
        });
    
   //on delete click, remove item
    $(".dlt")
        .on("click", function () {
        $(this).parent().remove();  
        });

});
    
    
