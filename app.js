$(document).ready(function () {
    var $value = $("#additemval").val();
    var $newitem = $("<div class='item'><h1></h1>" + $value + "<div class='btn'>Done!</div><div class='dlt'>Delete</div></div>");
    
    
    $("#additem")
      .click(function () {
    //on button click, add item variable
    $("#list").append($newitem); 
    //$newitem.append($value);
    
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
    
    
