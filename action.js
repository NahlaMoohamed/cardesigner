var Count=0;
/*
function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

if(isTouchDevice()===true) 
{
    $("#instructions").empty();
	
    var newHeader = document.createElement('h1');
    newHeader.text = 'Please Open from laptop brower';
    document.getElementById('instructions').appendChild(newHeader);

}
*/

var currentColor='first';
//card color changing
function update(jscolor) {
    document.getElementById('card').style.backgroundColor = '#' + jscolor;
}
//textarea color changing
function update2(jscolor) {
    currentColor ='#' + jscolor;
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

function showShapes(){
	var container = document.getElementById("shapes");
	if(container.style.display === 'none'){
		container.style.display = 'inline';
		$('#card').hide();
	}
	else{
		container.style.display = 'none';
		$('#card').show();
	}

}
function generateShape(Shape)
{
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
	var shape =  document.createElement('i');
	var cls="fa fa-"+Shape+" fa-5x";
	shape.className = cls;
	shape.title="Double click to delete!";
	shape.id = Shape + Count;
	mydivheader.appendChild(shape);
	temp.appendChild(mydivheader);
	container.appendChild(temp);
	dragElement(temp);
}

function generateButtons(){
	var container = document.getElementById("shapes");
	var shapes = ['heart','diamond','heartbeat'];
	for(var x=0; x<shapes.length; x++){
		var col = document.createElement('div');
		col.className = 'col-md-2';
		var link = document.createElement('a');
		link.id = shapes[x]+'Button';
		link.style.cursor = 'pointer';
		//$(shapes[x]+'Button').prop('click',generateShape(shapes[x]));
		//link.addEventListener("click", generateShape(shapes[x]));
		//link.onclick = generateShape(shapes[x]);
		var shape =  document.createElement('i');
		shape.className = "fa fa-"+shapes[x]+" fa-5x";
		link.appendChild(shape);
		col.appendChild(link);
		container.appendChild(col);
	}
}
window.addEventListener('click', function (evt) {
    if (evt.detail === 1) {
    	if(evt.target.tagName === 'TEXTAREA'){
    		document.getElementById(evt.target.id).style.color = String(currentColor);
    	}
    	else if(evt.target.tagName !== 'textButton'){
    		var ele = document.getElementById(evt.target.id);
    		if(currentColor !== 'first')
    		{
    			document.getElementById(evt.target.id).style.color = String(currentColor);
    		}
    	}
    }
    //Delete all the generated shapes when double clicked on them.
    if (evt.detail === 2) {
    	if( event.target.id !== 'textButton'){
    		if(event.target.id !== 'card')
    		{
    			document.getElementById(event.target.id).style.display = 'none';
    		}
    	}
    }
});

$(document).ready(function(){
	//Generate the fonts dropdown list
    var fonts = {'Arial':'Arial',"Tangerine":'Tangerine',"Time New Roman":'Time New Roman',"Verdana":"Verdana"};
    $.each(fonts, function(key, value) {
	    $('.font_type').append($("<option/>", {
	        value: key,
	        text: value
	    }));
	});
	//Generate the shapes dropdown list
	var filters = {"square":"Square","rSquare":"Rounded square","rectangle":"Rectangle","rRectangle":"Rounded rectangle"};
	$.each(filters, function(key, value) {
	    $('.filter_type').append($("<option/>", {
	        value: key,
	        text: value
	    }));
	});
    //Changes the font family of all the textareas
    $("select.font_type").change(function(){
    	var font = $(".font_type option:selected").val();
    	var elements = document.getElementsByTagName('textarea');
    	for(var i = 0 ; elements.length; i++){
    		elements[i].style.fontFamily=font;
    	} 	
    });
    //Changes the font size of all the textareas
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
				$('#card').removeClass('square').addClass('rRectangle');
			}
			else if($("#card").hasClass('rSquare'))
			{
				$('#card').removeClass('rSquare').addClass('rRectangle');
			}
			else if($("#card").hasClass('rectangle'))
			{
				$('#card').removeClass('rectangle').addClass('rRectangle');
			}
			else{
				$('#card').addClass('rRectangle');
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
    	shape.id = 'textarea' + Count;
    	shape.resize = 'both';
    	shape.overflow = 'auto';
    	mydivheader.appendChild(shape);
    	temp.appendChild(mydivheader);
    	container.appendChild(temp);
    	dragElement(temp);
    });
});