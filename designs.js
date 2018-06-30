
// A single-page web app that allows users to draw pixel Art on a customizable canvas! 

// Define parameters
const mainTable = $('#pixelCanvas');
  const gridCell = $("td");

// Select color input
// Select size input



// When size is submitted by the user, call makeGrid()
$('#sizePicker').bind("submit",event => {
    event.preventDefault();
    mainTable.children().remove();
    makeGrid();
     pickedColor();
  });


// The code that uses event listeners to trigger grid creation.
// and dynamically set the size of the table as an N by M grid.
function makeGrid() {

// Your code goes here!

  let gridHeight = $('#inputHeight').val();
  let gridWidth = $('#inputWeight').val();

  for (let row = 1; row <= gridHeight; row++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (let col = 1; col <= gridWidth; col++) {
      $('tr').filter(':last').append('<td></td>');
    }
  }
}

//   $("td").click(    
// 				 function(event) { 
// 			($(this).attr("style"))? ($(this).removeAttr("style")):($(this).css("background-color",$("#colorPicker").val()));                                                             })
//                 }


// Code that listens to events and modify the grid colors.
// such that a cell in the grid can be filled with the chosen color.
function pickedColor(){

 let colorPicked = $("#colorPicker").val();
  
  $("td").click(    
				 function(event) { 

			($(this).attr("style"))? ($(this).removeAttr("style")):($(this).css("background-color",$("#colorPicker").val()));
                                                              })
                }


// The CLEAR Button - code to clear color and the grid dynamically
const clear = $(".clearColAndGrid")

clear.on({
  click: function() {
    $("td").removeAttr("style");
  }, dblclick : function() {
    $('#pixelCanvas').empty();
  }
});

// // clear.on(" click dblclick", function clearColorOrGrid(){

// // 	const click = $(".clearColAndGrid").on("click", clearColorOrGrid());
// // 	const dblclick = $(".clearColAndGrid").on("dblclick", clearColorOrGrid());

// //   			switch (click||dblclick) {
// //     			case click:
// //         			gridCell.removeAttr("style");
// //         				break; 
// //     			case dblclick:
// // 	        		$('#pixelCanvas').empty();
// // 	        			break; 
// //     			default: 
// //     //     			text = "Looking forward to the Weekend";
// // }});
//   // $(this).css("background-color",$("#colorPicker").val());
// 							//$(this).click().removeAttr("background-color");
//   }
// )




// clear.trigger("click")
 

