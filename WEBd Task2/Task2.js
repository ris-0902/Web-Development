var input = document.getElementById('input');
// console.log(input);
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){
    
    // alert("ok");

// when we change the input and output type vale we need to updata the 
// option_from and option_to
    option_from = inputType.value;
	option_to = resultType.value;

// now compare the input and resultType value and add formula

	if(option_from === "Metre" && option_to==="Kilometre"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "Metre" && option_to==="Centimetre"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;

	}else if(option_from === "Metre" && option_to==="Metre"){
		//this is meter to meter formula 
		result.value = input.value
	}



	if(option_from === "Kilometre" && option_to==="Metre"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "Kilometre" && option_to==="Centimetre"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "Kilometre" && option_to==="Kilometre"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}

	if(option_from === "Centimetre" && option_to==="Kilometre"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimetre" && option_to==="Metre"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimetre" && option_to==="Centimetre"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
}
}
