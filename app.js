$(document).ready(function () {
//Drag and drop items
$(function() {
    $( ".sortable" ).sortable();
  });
//Add new items
function addItem () {       
    var $value = $("#additemval").val();
    var $newitem = $("<div class='item'><h1>" + $value + "</h1><div class='btn'>Done!</div><div class='dlt'>Delete</div></div>");
    $("#list").append($newitem); };

$(document).on("click", "#additem", addItem);
$(document).keypress(function(e) {
    if(e.which == 13) {
    e.preventDefault();
    addItem();
    }
});
//Mark item done and delete item (Button Events)
function buttonDone (event) {
    $(this).prev().toggleClass("done"); 
};    
function buttonDelete (event) {               
    $(this).parent().remove(); 
};
$(document).on("click", ".btn", buttonDone);
$(document).on("click", ".dlt", buttonDelete);
      
 
});