function decimalBinario(){
	var decimal = parseInt(document.getElementById("deci").value);
	var binario = [];
	
	while(decimal>0){
		var tmp = decimal%2;
		if (tmp != 0){
			binario.push(1);
			decimal = (decimal-1)/2;
		}
		else{
			binario.push(0);
			decimal = decimal/2;
		}
	}
	document.getElementById("bin").value = binario.reverse().join('');
}

function decimalOctal(){
	var decimal = parseInt(document.getElementById("deci").value);
	var octal = [];
	
	while(decimal>0){
		var tmp = decimal%8;
		if (tmp!=0){
			octal.push(tmp);
			decimal = (decimal-tmp)/8;
		}
		else{
			octal.push(0);
			decimal = decimal/8;
		}
	}
	document.getElementById("oct").value = octal.reverse().join('');
}

function decimalHexadecimal(){
	var decimal = parseInt(document.getElementById("deci").value);
	var hexadecimal = [];
	
	var letrasHex = {10:'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'};
	
	while(decimal>0){
		var tmp = decimal%16;
		if (tmp!=0){
			hexadecimal.push(tmp);
			decimal = (decimal-tmp)/16;
		}
		else{
			hexadecimal.push(0);
			decimal = decimal/16;
		}
	}
	for(i=0; i<hexadecimal.length; i++){
  		if(hexadecimal[i]>9){
    	hexadecimal[i] = letrasHex[hexadecimal[i]]
  		}
	}
	document.getElementById("hex").value = hexadecimal.reverse().join('');
}

//----------------------------------------------------------------------

function binarioDecimal(){
	var binario = document.getElementById("bin").value;
	var decimal = 0;
	var aux = binario.length;
	
	for(i=1, j=0; j<aux; i++, j++){
		decimal += parseInt(binario[aux-i])*(2**j);
	}
	document.getElementById("deci").value = decimal;
}

function binarioOctal(){
	var binario = document.getElementById("bin").value;
	var octal = [];
	
	var aux = (binario.length)%3;
	if (aux==1){
		binario = '00'+binario;
	}else if(aux==2){
		binario = '0'+binario;
	}
	
	var tabelaOctal = {"000":'0', "001":'1', "010":'2', "011":'3', "100":'4', "101":'5', "110":'6', "111":'7'};
	
	var copiaBin = [];
	for(i=0; i<binario.length; i+=3){
		copiaBin.push(binario[i]+binario[i+1]+binario[i+2]);
	}
	
	for(i=0; i<copiaBin.length; i++){
		octal.push(tabelaOctal[copiaBin[i]]);
	}
	document.getElementById("oct").value = octal.join('');
}

function binarioHexadecimal(){
	var binario = document.getElementById("bin").value;
	var hexadecimal = [];
	
	var aux = (binario.length)%4;
	if (aux==1){
		binario = '000'+binario;
	}else if (aux==2){
		binario = '00'+binario;
	}else if (aux==3){
		binario = '0'+binario;
	}
	
	var tabelaHexa = {'0000':'0', '0001':'1', '0010':'2', '0011':'3', '0100':'4', '0101':'5', '0110':'6', '0111':'7', '1000':'8', '1001':'9', '1010':'A', '1011':'B', '1100':'C', '1101':'D', '1110':'E', '1111':'F'};
	
	var copiaBin = [];
	for(i=0; i<binario.length; i+=4){
		copiaBin.push(binario[i]+binario[i+1]+binario[i+2]+binario[i+3]);
	}
	
	for(i=0; i<copiaBin.length; i++){
		hexadecimal.push(tabelaHexa[copiaBin[i]]);
	}
	document.getElementById("hex").value = hexadecimal.join('');
}

//--------------------------------------------------------------------------

function transformando(){
	decimalBinario();
	binarioDecimal();
}
