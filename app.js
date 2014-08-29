$(document).ready(function() {
    $("#additem")
      .on("click", function() {
    var value = $("#additemval").val();
    var newitem = $("<div>", {class: "item"});
    //on button click, add item variable
    $("#list").append(newitem);
    newitem.append(value).append("</div>");
    //newitem.addClass("item");
      });
    
    //on done click, strikethough item
    $(".btn")
        .on("click", function() {      $(this).prev().toggleClass("done"); 
        });
    
   //on delete click, remove item
    $(".dlt")
        .on("click", function() {
        $(this).parent().remove();  
        });

});
    
    
