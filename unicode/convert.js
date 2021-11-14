const enc = [0x1f0ef, 0x1f12f, 0x2475, 0x1f10f, 0x1f0cf, 0x1f1a5];
const mth = [0x1d3bf, 0x1d3f3, 0x1d427, 0x1d45b, 0x1d48f, 0x1d4c3, 0x1d52b, 0x1d4f7, 0x1d55f, 0x1d593, 0x1d5c7, 0x1d5fb, 0x1d62f];
const mthReserved = [];

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
		if((character>0x40)&&(character<0x5b)){
			converted = mth[mthType] + character;
			result = result + String.fromCodePoint(converted);
		}else if((character>0x60)&&(character<0x7b)){
			converted = mth[mthType] + character - 0x6;
			result = result + String.fromCodePoint(converted);
		}else{
			result = result + string[i];
		}
	}
    mth_result.innerHTML = result;
}