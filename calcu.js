var scr , c = 0 , d = 1 , result = 0;

function appl(num){
	console.log("arrigatou");
	
	scr = document.getElementById('scr');
	
	scr.value += num.innerHTML;
}

function dilit(){
	var i;
	d = "";
	for(i=0 ; i<scr.value.length-1 ; i++)
		d += scr.value[i];
	scr.value =  d;
}

function dilito(){
	scr.value = "";
}

function div(op){
	if(isop(scr.value[scr.value.length-1])){
		alert("Can not put an operator after an operator or in an empty field..........");
		return;
	}
	
	scr.value += op.innerHTML;
}

function mul(op){
	if(isop(scr.value[scr.value.length-1])){
		alert("Can not put an operator after an operator..........");
		return;
	}
	
	scr.value += op.innerHTML;
}

function sub(op){
	if(isop(scr.value[scr.value.length-1])){
		alert("Can not put an operator after an operator..........");
		return;
	}
	
	scr.value += op.innerHTML;
}

function add(op){
	if(isop(scr.value[scr.value.length-1])){
		alert("Can not put an operator after an operator..........");
		return;
	}
	
	scr.value += op.innerHTML;
}

function leggo(){
	scr.value = eval(scr.value).toString();
}

function isop(op){
	if(op=="+" || op=="-" || op=="*" || op=="/")
		return true;
	return false;
}