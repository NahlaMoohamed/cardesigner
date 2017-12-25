var Count=0;
var list = [];
function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('card').style.backgroundColor = '#' + jscolor
}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function generateShape(Shape)
{
	Count++;
	var container = document.getElementById("card");
	var temp = document.createElement('div');
	temp.id = 'mydiv'+Count;
	list.push('mydiv'+Count);
	temp.style.position = 'absolute';
	temp.style.textAlign = 'center';
	var mydivheader = document.createElement('div');
	mydivheader.id = 'mydiv'+Count+'header';
	mydivheader.style.padding = '10px';
	mydivheader.style.cursor = 'move';
	mydivheader.style.color = '#fff';
	var shape =  document.createElement('div');
	shape.className = Shape;
	shape.title="Double click to delete!";
	shape.id = Shape + Count;
	mydivheader.appendChild(shape);
	temp.appendChild(mydivheader);
	container.appendChild(temp);
	dragElement(temp);
}

$(document).ready(function(){
	$(this).dblclick(function(event) {
		if( event.target.id !== 'textButton'){
			document.getElementById(event.target.id).style.display = 'none';
		}
    });
            
    $("select.font_type").change(function(){
    	var font = $(".font_type option:selected").val();
    	//var changefont = "'" +font+"'"+' !important';
    	var elements = document.getElementsByTagName('textarea');
    	for(var i = 0 ; elements.length; i++){
    		elements[i].style.fontFamily=font;
    	} 	
    });
    $('input[name="changefont"]').change(function(){
    	var size = $("#font_size").val();
    	var elements = document.getElementsByTagName('textarea');
    	for(var i = 0 ; elements.length; i++){
    		elements[i].style.fontSize=size+'px';
    	} 	
    });
    $("select.filter_type").change(function(){
        var shape = $(".filter_type option:selected").val();
        if(shape === 'square')
		{
			if($("#card").hasClass("rSquare"))
			{
				$('#card').removeClass('rSquare').addClass("square");
			}
			else if($("#card").hasClass("rectangle"))
			{
				$('#card').removeClass('rectangle').addClass("square");
			}
			else if($("#card").hasClass("rRectangle"))
			{
				$('#card').removeClass('rRectangle').addClass("square");
			}
			else{
				$("#card").addClass("square");
			}
		}
		else if(shape === "rSquare")
		{
			if($("#card").hasClass("square"))
			{
				$('#card').removeClass('square').addClass("rSquare");
			}
			else if($("#card").hasClass("rectangle"))
			{
				$('#card').removeClass('rectangle').addClass("rSquare");
			}
			else if($("#card").hasClass("rRectangle"))
			{
				$('#card').removeClass('rRectangle').addClass("rSquare");
			}
			else{
				$("#card").addClass("rSquare");
			}
		}
		else if(shape === "rectangle")
		{
			if($("#card").hasClass("square"))
			{
				$('#card').removeClass('square').addClass("rectangle");
			}
			else if($("#card").hasClass("rSquare"))
			{
				$('#card').removeClass('rSquare').addClass("rectangle");
			}
			else if($("#card").hasClass("rRectangle"))
			{
				$('#card').removeClass('rRectangle').addClass("rectangle");
			}
			else{
				$("#card").addClass("rectangle");
			}
		}
		if(shape === 'rRectangle')
		{
			if($('#card').hasClass('square'))
			{
				$('#card').removeClass('square').addClass('rRectangle').addClass('black');
			}
			else if($("#card").hasClass('rSquare'))
			{
				$('#card').removeClass('rSquare').addClass('rRectangle').addClass('black');
			}
			else if($("#card").hasClass('rectangle'))
			{
				$('#card').removeClass('rectangle').addClass('rRectangle').addClass('black').addClass('black');
			}
			else{
				$('#card').addClass('rRectangle').addClass('black');
			}
		}
    });

    $('#textButton').click(function(){
    	Count++;
		var container = document.getElementById("card");
		var temp = document.createElement('div');
    	temp.id = 'mydiv'+Count;
    	temp.style.position = 'absolute';
    	temp.style.textAlign = 'center';
    	var mydivheader = document.createElement('div');
    	mydivheader.id = 'mydiv'+Count+'header';
    	mydivheader.style.padding = '10px';
    	mydivheader.style.cursor = 'move';
    	mydivheader.style.color = '#fff';
    	var shape =  document.createElement('textarea');
    	shape.style.backgroundColor = 'transparent';
    	shape.title = "Double Click to delete!"
    	mydivheader.appendChild(shape);
    	temp.appendChild(mydivheader);
    	container.appendChild(temp);
    	dragElement(temp);
    });
});