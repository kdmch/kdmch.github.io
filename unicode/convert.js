const enc　= [0x1f0ef, 0x1f12f, 0x2475, 0x1f10f, 0x1f0cf, 0x1f1a5];

function encTransform($this){
	let string = $this.value;
	let element = document.getElementById("enc");
	let radioGroup = element.encradio;
	let encType = radioGroup.value;
	let result = "";
	let converted, character;

	for(let i=0; i<string.length; i++){
		character = string[i].codePointAt(0);
		if((character>0x60)&&(character<0x7b)){
			character = character - 0x20;
		}
		if((character>0x40)&&(character<0x5b)){
			converted = enc[encType] + character;
			result = result + String.fromCodePoint(converted);
		}else{
			result = result + string[i];
		}
	}
    enc_result.innerHTML = result;
}