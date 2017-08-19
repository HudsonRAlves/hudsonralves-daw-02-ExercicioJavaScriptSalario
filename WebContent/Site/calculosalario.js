window.onload = init;

function init() {

	var calculo = document.getElementById('calculo');
	calculo.onclick = calculoSalario;

	function calculoSalario() {

		var salarioatual = document.getElementById('salarioatual').value;
		var salarioanterior = document.getElementById('salarioanterior').value = salarioatual;
		var percentual = document.getElementById('percentual');
		var correcao = parseFloat(0);
		var novosalario = document.getElementById('novosalario');

		if (salarioatual <= 280) {
			percentual.value = 20;
			correcao = document.getElementById('correcao').value = salarioanterior * 0.20;
			novosalario.value = parseFloat(salarioanterior) + (correcao);
		} else {
			if (salarioatual <= 700) {
				percentual.value = 15;
				correcao = document.getElementById('correcao').value = salarioanterior * 0.15;
				novosalario.value = parseFloat(salarioanterior) + (correcao);
			} else {
				if (salarioatual <= 1500) {
					percentual.value = 10;
					correcao = document.getElementById('correcao').value = salarioanterior * 0.10;
					novosalario.value = parseFloat(salarioanterior) + (correcao);
				} else {
					percentual.value = 5;
					correcao = document.getElementById('correcao').value = salarioanterior * 0.05;
					novosalario.value = parseFloat(salarioanterior) + (correcao);
				}
			}

		}
		
		
		

	}
}