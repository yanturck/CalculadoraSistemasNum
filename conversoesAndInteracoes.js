/* Conversao de decimal para os demais sistemas numericos, para que nao haja
redundancia de codigo as outras transformacoes utizaram as conversoes decimais.
--------------------------------------------------------------------------------
_____________________________SISTEMA DECIMAL____________________________________*/

function decimalBinario(numDecimal){ //DECIMAL --> BINARIO
	var decimal = parseInt(numDecimal);
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
	return binario.reverse().join('');
}
//--------------------------------------------------------------------------
function decimalOctal(numDecimal){ //DECIMAL --> OCTAL
	var decimal = parseInt(numDecimal);
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
	return octal.reverse().join('');
}
//------------------------------------------------------------------------
function decimalHexadecimal(numDecimal){ //DECIMAL --> HEXADECIMAL
	var decimal = parseInt(numDecimal);
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
    		hexadecimal[i] = letrasHex[hexadecimal[i]];
  		}
	}
	return hexadecimal.reverse().join('');
}
//------------------------------------------------------------------------
function decimalBCD(numDecimal){ //DECIMAL -->BCD
	var decimal = numDecimal;
	var bcd = [];
	
	var tabelaBCD = {'0':'0000', '1':'0001', '2':'0010', '3':'0011', '4':'0100',
			 '5':'0101', '6':'0110', '7':'0111', '8':'1000', '9':'1001'};
	
	for(i=0; i<decimal.length; i++){
		bcd.push(tabelaBCD[decimal[i]]);
	}
	return bcd.join('');
}

/*-------------------------------------------------------------------------
Para que nao seja preciso criar mais codigo, todo o numero binario passarar
pra decimal depois para o Sistema Numerico desejado.
---------------------------------------------------------------------------
________________________SISTEMA BINARIO & BCD______________________________
Como o Sistema BCD e basicamente o mesmo que o do Binario, o codigo sera
reaproveitado para ambas as conversoes
---------------------------------------------------------------------------*/
function binarioDecimal(numBinario){ //BINARIO --> DECIMAL
	var binario = numBinario;
	var decimal = 0;
	
	var aux = binario.length;
	
	for(i=1, j=0; j<aux; i++, j++){
		decimal += parseInt(binario[aux-i])*(2**j);
	}
	return decimal;
}
//-------------------------------------------------------------------
function binarioOctal(numBinario){ //BINARIO --> OCTAL
	var decimal = binarioDecimal(numBinario);
	var octal = decimalOctal(decimal);
	return octal;
}
//-------------------------------------------------------------------
function binarioHexadecimal(numBinario){ //BINARIO --> HEXADECIMAL
	var decimal = binarioDecimal(numBinario);
	var hexadecimal = decimalHexadecimal(decimal);
	return hexadecimal;
}
//-------------------------------------------------------------------
function binarioBCD(numBinario){ //BINARIO --> BCD
	var decimal = String(binarioDecimal(numBinario));
	var bcd = decimalBCD(decimal);
	return bcd;
}

//_________________________SISTEMA OCTAL_____________________________

function octalDecimal(numOctal){ //OCTAL --> DECIMAL
	var octal = numOctal;
	var decimal = 0;
	
	var aux = octal.length;
	
	for(i=1, j=0; j<aux; i++, j++){
		decimal += parseInt(octal[aux-i])*(8**j);
	}
	return decimal;
}
//--------------------------------------------------------------------
function octalBinario(numOctal){ //OCTAL --> BINARIO
	var decimal = octalDecimal(numOctal);
	var binario = decimalBinario(decimal);
	return binario;
}
//--------------------------------------------------------------------
function octalHexadecimal(numOctal){ //OCTAL --> HEXADECIMAL
	var decimal = octalDecimal(numOctal);
	var hexadecimal = decimalHexadecimal(decimal);
	return hexadecimal;
}
//--------------------------------------------------------------------
function octalBCD(numOctal){ //OCTAL --> BCD
	var decimal = String(octalDecimal(numOctal));
	var bcd = decimalBCD(decimal);
	return bcd;
}

//_________________________SISTEMA HEXADECIMAL________________________

function hexadecimalDecimal(numHexadecimal){ //HEXADECIMAL --> DECIMAL
	var hexadecimal = numHexadecimal.split('');
	var decimal = 0;

	var aux = hexadecimal.length;
	var tabelaHex = {'A':'10', 'B':'11', 'C':'12', 'D':'13', 'E':'14', 'F':'15'};
	
	for(i=0; i<aux; i++){
		var tmp = hexadecimal[i];
		if(tmp=='A' || tmp=='B' || tmp=='C' || tmp=='D' || tmp=='E' || tmp=='F'){
			hexadecimal[i] = tabelaHex[tmp];
		}
	}
	for(i=1, j=0; j<aux; i++, j++){
		decimal += parseInt(hexadecimal[aux-i])*(16**j);
	}
	return decimal;
}
//--------------------------------------------------------------------------
function hexadecimalBinario(numHexadecimal){ //HEXADECIMAL --> BINARIO
	var decimal = hexadecimalDecimal(numHexadecimal);
	var binario = decimalBinario(decimal);
	return binario;
}
//--------------------------------------------------------------------------
function hexadecimalOctal(numHexadecimal){ //HEXADECIMAL --> OCTAL
	var decimal = hexadecimalDecimal(numHexadecimal);
	var octal = decimalOctal(decimal);
	return octal;
}
//--------------------------------------------------------------------------
function hexadecimalBCD(numHexadecimal){ //HEXADECIMAL --> BCD
	var decimal = String(hexadecimalDecimal(numHexadecimal));
	var bcd = decimalBCD(decimal);
	return bcd;
}

//__________________________LIMPANDO OS TEXTOS______________________________

function limparDecimal(){ //Limpando totas as textFields exceto DECIMAL
	document.getElementById('bin').value = '';
	document.getElementById('oct').value = '';
	document.getElementById('hex').value = '';
	document.getElementById('bcd').value = '';
}
function limparBinario(){ //Limpando totas as textFields exceto BINARIO
	document.getElementById('deci').value = '';
	document.getElementById('oct').value = '';
	document.getElementById('hex').value = '';
	document.getElementById('bcd').value = '';
}
function limparOctal(){ //Limpando totas as textFields exceto OCTAL
	document.getElementById('bin').value = '';
	document.getElementById('deci').value = '';
	document.getElementById('hex').value = '';
	document.getElementById('bcd').value = '';
}
function limparHexadecimal(){ //Limpando totas as textFields exceto HEXADECIMAL
	document.getElementById('bin').value = '';
	document.getElementById('oct').value = '';
	document.getElementById('deci').value = '';
	document.getElementById('bcd').value = '';
}
function limparBCD(){ //Limpando totas as textFields exceto BCD
	document.getElementById('bin').value = '';
	document.getElementById('oct').value = '';
	document.getElementById('hex').value = '';
	document.getElementById('deci').value = '';
}

//__________________________LETRAS MAIUSCULAS______________________________

function maiuscula(){
  var tmp = document.getElementById('hex').value;
  tmp = tmp.toUpperCase();
  document.getElementById('hex').value = tmp;
}

/*______________________________ALERTAS_____________________________________
Alertar caso nao tenha nenhum campo preenchido.
--------------------------------------------------------------------------*/
function alerta(){
	var decimal = document.getElementById('deci').value;
	var binario = document.getElementById('bin').value;
	var octal = document.getElementById('oct').value;
	var hexadecimal = document.getElementById('hex').value;
	var bcd = document.getElementById('bcd').value;
	
	if(decimal=='' && binario=='' && octal=='' && hexadecimal=='' && bcd==''){
		alert('NENHUM CAMPRO PREENCHIDO, por favor preencha um campo!');
		return false;
	}
	return true;
}

//______________________________BOTAO COVERTER________________________________

function converter(){
	var decimal = document.getElementById('deci').value;
	var binario = document.getElementById('bin').value;
	var octal = document.getElementById('oct').value;
	var hexadecimal = document.getElementById('hex').value;
	var bcd = document.getElementById('bcd').value;
	
	var alertas = alerta();
	
	if (alertas==true){
		if(decimal!=""){
			document.getElementById('bin').value = decimalBinario(decimal);
			document.getElementById('oct').value = decimalOctal(decimal);
			document.getElementById('hex').value = decimalHexadecimal(decimal);
			document.getElementById('bcd').value = decimalBCD(decimal);
		}else if(binario!=''){
			document.getElementById('deci').value = binarioDecimal(binario);
			document.getElementById('oct').value = binarioOctal(binario);
			document.getElementById('hex').value = binarioHexadecimal(binario);
			document.getElementById('bcd').value = binarioBCD(binario);
		}else if(octal!=''){
			document.getElementById('deci').value = octalDecimal(octal);
			document.getElementById('bin').value = octalBinario(octal);
			document.getElementById('hex').value = octalHexadecimal(octal);
			document.getElementById('bcd').value = octalBCD(octal);
		}else if(hexadecimal!=''){
			document.getElementById('deci').value = hexadecimalDecimal(hexadecimal);
			document.getElementById('bin').value = hexadecimalBinario(hexadecimal);
			document.getElementById('oct').value = hexadecimalOctal(hexadecimal);
			document.getElementById('bcd').value = hexadecimalBCD(hexadecimal);
		}else if(bcd!=''){
			document.getElementById('deci').value = binarioDecimal(bcd);
			document.getElementById('bin').value = decimalBinario(binarioDecimal(bcd));
			document.getElementById('oct').value = binarioOctal(bcd);
			document.getElementById('hex').value = binarioHexadecimal(bcd);
		}
	}
}
