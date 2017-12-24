var Count=0;
$(document).ready(function(){
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

    var shapes = ['heart','pointer','burst-12','burst-8'];
    /*
    var container = document.getElementById("shapes");
    for(var i=1; i<=shapes.length;i++)
    {
    	var temp = document.createElement('div');
    	temp.id = 'mydiv'+i;
    	temp.style.position = 'absolute';
    	temp.style.textAlign = 'center';
    	var mydivheader = document.createElement('div');
    	mydivheader.id = 'mydiv' + i +'header';
    	mydivheader.style.padding = '10px';
    	mydivheader.style.cursor = 'move';
    	mydivheader.style.color = '#fff';
    	var shape =  document.createElement('div');
    	shape.className = shapes[i-1];
    	mydivheader.appendChild(shape);
    	temp.appendChild(mydivheader);
    	container.appendChild(temp);
    	dragElement(temp);
    }
*/
    $('#heartButton').click(function(){
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
    	var shape =  document.createElement('div');
    	shape.className = 'heart';
    	mydivheader.appendChild(shape);
    	temp.appendChild(mydivheader);
    	container.appendChild(temp);
    	dragElement(temp);
    });
    $('#burst8Button').click(function(){
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
    	var shape =  document.createElement('div');
    	shape.className = 'burst-8';
    	mydivheader.appendChild(shape);
    	temp.appendChild(mydivheader);
    	container.appendChild(temp);
    	dragElement(temp);
    });
    $('#burst12Button').click(function(){
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
    	var shape =  document.createElement('div');
    	shape.className = 'burst-12';
    	mydivheader.appendChild(shape);
    	temp.appendChild(mydivheader);
    	container.appendChild(temp);
    	dragElement(temp);
    });
    $('#pointerButton').click(function(){
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
    	var shape =  document.createElement('div');
    	shape.className = 'pointer';
    	mydivheader.appendChild(shape);
    	temp.appendChild(mydivheader);
    	container.appendChild(temp);
    	dragElement(temp);
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
    	mydivheader.appendChild(shape);
    	temp.appendChild(mydivheader);
    	container.appendChild(temp);
    	dragElement(temp);
    });

});