const squared = 0x1f130 - 0x41;


function encTransform($this){
	let string = $this.value;
	let result = "";
	let uc, midcp;
	for(let i=0; i<string.length; i++){
		midcp = string[i].codePointAt(0);
		if((midcp>0x60)&&(midcp<0x7b)){
			midcp = midcp - 0x20;
		}
		if((midcp>0x40)&&(midcp<0x5b)){
			uc = squared + midcp;
			result = result + String.fromCodePoint(uc);
		}else{
			result = result + string[i]
		}
	}
    enc_result.innerHTML = result;
}