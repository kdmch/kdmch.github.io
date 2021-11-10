let text_form = document.getElementById('enc_textbox');
let output = document.getElementById('emc_result');

timestamp = 0;

function update(){
	
	timestamp++;
	window.requestAnimationFrame(update);
	
	if (timestamp % 10 == 0 ){
		output.innerHTML = {null : text_form.value};
	}
	
}

update();
