/*
*	outputMask.js
*	version: V0.1
*	author: @Br3eno
*	Description: Use this with jquery mask for apply mask in output money values. Like a Span, p, H1 etc...
*/

function trataValorMaskOutput(val){
	var type = typeCheck(val);

	if(type == 'int'){
		val = val + '00';
			return val;
		}else if(type == 'float'){
			return val;
		}else if(type == 'floatOneDecimal'){
			val = val + '0';
			return val;
		}
	}


//Check type of number
function typeCheck(val){

	if(checkFloatWithOneDecimal(val)){
		return 'floatOneDecimal'

	}else if(checkFloatNumber(val)){
		return 'float';
	}else if(checkIntNumber(val)){
		return 'int';
	}
}


/*Check if the size is larger than 2 - Boolean Return*/
function checkLenghtLessThanTwo(a){
	return a <= 2 ? true : false;
}

/*Check number is int or not - Boolean Return*/
function checkIntNumber(a){
	var checkVal = a.match( /^(\d+?\d*)$/ );
	return checkVal != null ? true : false;
}


/*Check number is float or not - Boolean Return*/
function checkFloatNumber(a){
	var checkVal = a.match( /^(\d+\.\.?\d*|\.\d+|\d+\,\,?\d*)$/ );
	return checkVal != null ? true : false;
}

/*Check number is float with 1 decimal number - Boolean Return*/
function checkFloatWithOneDecimal(a){
	a = a.match( /^(\d+\.\.?\d|\d+\,\,?\d)$/ );
	return a != null ? true : false;
}
