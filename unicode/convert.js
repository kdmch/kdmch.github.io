const enc = [0x1f0ef, 0x1f12f, 0x2475, 0x1f10f, 0x1f0cf, 0x1f1a5];
const mth = [0x1d3bf, 0x1d3f3, 0x1d427, 0x1d45b, 0x1d48f, 0x1d4c3, 0x1d52b, 0x1d4f7, 0x1d55f, 0x1d593, 0x1d5c7, 0x1d5fb, 0x1d62f];
const mthReserved = [0x1d455, 0x1d49d, 0x1d4a0, 0x1d4a1, 0x1d4a3, 0x1d4a4, 0x1d4a7, 0x1d4a8, 0x1d4d, 0x1d4ba, 0x1d4bc, 0x1d4c4, 0x1d506, 0x1d50b, 0x1d50c, 0x1d515, 0x1d51d, 0x1d53a, 0x1d53f, 0x1d545, 0x1d547, 0x1d548, 0x1d549, 0x1d551];
const mthReplace = [0x210e, 0x212c, 0x2130, 0x2131, 0x210b, 0x2110, 0x2112, 0x2133, 0x211b, 0x212f, 0x210a, 2134, 0x212d, 0x210c, 0x2111, 0x211c, 0x2128, 0x2102, 0x210d, 0x2115, 0x2119, 0x211a, 0x211d, 0x2124];
const mthDigit = [0x1d7ce, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x1d7d8, 0x1d7e2, 0x1d7ec, 0x30, 0x30, 0x1d7f6];

function mthReplacement(charaCode){
	let result = "";
	let flag = false;
	for(let k=0; k<mthReserved.length; k++){
		if(charaCode.toString(16) == mthReserved[k].toString(16)){
			result = String.fromCodePoint(mthReplace[k]);
			console.log("0x");
			flag = true;
			break;
		}
	}
	if(!flag)result = String.fromCodePoint(charaCode);
	return result;
}

function encTransform($this){
	let string = $this.value;
	let element = document.getElementById("enc");
	let radioGroup = element.encradio;
	let type = radioGroup.value;
	let result = "";
	let converted, character;

	for(let i=0; i<string.length; i++){
		character = string[i].codePointAt(0);
		if((character>0x60)&&(character<0x7b)){ // a to A
			character = character - 0x20;
		}
		if((character>0x40)&&(character<0x5b)){
			converted = enc[type] + character;
			result = result + String.fromCodePoint(converted);
		}else{
			result = result + string[i];
		}
	}
    enc_result.innerHTML = result;
}

function mthTransform($this){
	let string = $this.value;
	let element = document.getElementById("mth");
	let radioGroup = element.mthradio;
	let mthType = radioGroup.value;
	let result = "";
	let converted, character;

	for(let i=0; i<string.length; i++){
		character = string[i].codePointAt(0);
		if((character>0x30)&&(character<0x3a)){
			result = result + String.fromCodePoint(mthDigit[mthType] + character - 0x30);
		}else if((character>0x40)&&(character<0x5b)){
			converted = mthReplacement(mth[mthType] + character);
			result = result + converted;
		}else if((character>0x60)&&(character<0x7b)){
			converted = mthReplacement(mth[mthType] + character - 0x6);
			result = result + converted;
		}else{
			result = result + string[i];
		}
	}
    mth_result.innerHTML = result;
}

