$(document).ready(function(){
	
	setInterval(start, 10000);
});

function start(){
	var i;
	var total = 0;
	var online = 0;
	var offline = 0;

	var vetor = [
		// IMPRESSORAS
		{ nome: "novos", ip: "192.168.0.190", tipo: 80 },
		{ nome: "seminovos", ip: "192.168.0.32", tipo: 80 },
		{ nome: "nac", ip: "192.168.0.39", tipo: 80 },
		{ nome: "contabilidade", ip: "192.168.0.30", tipo: 80 },
		{ nome: "garantia", ip: "192.168.0.166", tipo: 80 },
		{ nome: "rh", ip: "192.168.0.204", tipo: 80 },
		{ nome: "consultores", ip: "192.168.0.239", tipo: 80 },
		{ nome: "estoque", ip: "192.168.0.203", tipo: 80 },
		{ nome: "tecnica", ip: "192.168.0.238", tipo: 80 },
		{ nome: "financeiro", ip: "192.168.0.145", tipo: 80 },
		{ nome: "diretoria", ip: "192.168.0.36", tipo: 80 },
		{ nome: "vemar", ip: "192.168.0.17", tipo: 80 },
		{ nome: "cpd", ip: "192.168.0.242", tipo: 80 },
		{ nome: "caixa", ip: "192.168.0.100", tipo: 80 },

		// INFORMATICA
		{ nome: "thiago", ip: "TI02", tipo: 135 },
		{ nome: "ricardo", ip: "TI01", tipo: 135 },
		{ nome: "ad", ip: "192.168.0.252", tipo: 135 },
		{ nome: "ad2", ip: "192.168.0.254", tipo: 135 },
		{ nome: "endian", ip: "192.168.0.12", tipo: 80 },
		{ nome: "printserver", ip: "192.168.0.20", tipo: 135 },
		{ nome: "portalmarte", ip: "192.168.0.122", tipo: 80 },
		{ nome: "roteadornovos", ip: "192.168.0.2", tipo: 80 },
		{ nome: "roteadorpecas", ip: "192.168.0.40", tipo: 80 },
		{ nome: "roteadordiretoria", ip: "192.168.1.100", tipo: 80 },
		{ nome: "roteadorseminovos", ip: "192.168.0.42", tipo: 80 },
		{ nome: "roteadorcentral", ip: "192.168.0.41", tipo: 80 },
		{ nome: "roteadorti", ip: "192.168.0.6", tipo: 80 },
		// DIRETORIA
		{ nome: "cleide", ip: "DIRETORIA-01", tipo: 135 },
		{ nome: "miro", ip: "DIRETORIA02", tipo: 135 },
		{ nome: "ero", ip: "DIRETORIA04", tipo: 135 },
		
		{ nome: "vania", ip: "DIRETORIA03", tipo: 135 },
	];

	var links2 = [
		{ nome: "espera", ip: "189.57.179.62", tipo: 80 },
		{ nome: "gateway", ip: "200.153.45.73", tipo: 80 },
		{ nome: "mario", ip: "VENDASNOVOS14", tipo: 135 },
		{ nome: "gertec", ip: "192.168.0.50", tipo: 80 },
	];

	var financeiro = [
		// FINANCEIRO
		{ nome: "simone", ip: "FINANCEIRO", tipo: 135 },
		{ nome: "rose", ip: "CPAGAR01", tipo: 135 },
		{ nome: "jessica", ip: "FINANCEIRO01", tipo: 135 },
		{ nome: "monica", ip: "FINANCEIRO04", tipo: 135 },
		{ nome: "larissa", ip: "CPAGAR02", tipo: 135 },
		{ nome: "gabrielly", ip: "FINANCEIRO03", tipo: 135 }

	];

	var novos = [
		// VENDAS NOVOS
		{ nome: "janete", ip: "GER-VENDASNOVOS", tipo: 135 },
		{ nome: "amarildo", ip: "SUPERVISOR-WEB", tipo: 135 },
		{ nome: "jackeline", ip: "NOVOS-NOTE01", tipo: 135 },
		{ nome: "webert", ip: "VENDASNOVOS13", tipo: 135 },
		{ nome: "eduardo", ip: "VENDASNOVOS12", tipo: 135 },
		{ nome: "jarbas", ip: "VENDASNOVOS03", tipo: 135 },
		{ nome: "vinicius", ip: "VENDASNOVOS06", tipo: 135 },
		{ nome: "pedro", ip: "VENDASNOVOS05", tipo: 135 },
		{ nome: "josejunior", ip: "NOVOS-NOTE02", tipo: 135 },
		{ nome: "claudia", ip: "VENDASNOVOS10", tipo: 135 },
		{ nome: "recepcaonovos", ip: "RECEPCAO-VENDAS", tipo: 135 },
		{ nome: "ENTREGA", ip: "ENTREGA", tipo: 135 },
		{ nome: "evelyn", ip: "VENDASNOVOS2", tipo: 135 },
	];

	var seminovos = [
		// SEMI NOVOS
		{ nome: "carlos", ip: "SEMINOVOS01", tipo: 135 },
		{ nome: "anderson", ip: "SEMINOVOS02", tipo: 135 },
		{ nome: "yamamoto", ip: "SEMINOVOS03", tipo: 135 },
		{ nome: "diego", ip: "SEMI-NOVOS05", tipo: 135 },
		{ nome: "ivanildo", ip: "SEMINOVOS04", tipo: 135 }
	];

	var frotas = [
		// SEMI NOVOS
		{ nome: "klause", ip: "FROTAS07", tipo: 135 },
		{ nome: "daniel", ip: "FROTAS08", tipo: 135 },
		{ nome: "rodrigopontes", ip: "FROTAS02", tipo: 135 },
		{ nome: "thiagocosta", ip: "FROTAS01", tipo: 135 },
		{ nome: "rafaelsilva", ip: "FROTAS05", tipo: 135 }
	];

	var pecas = [
		{ nome: "gabrielsilva", ip: "PECAS09", tipo: 135 },
		{ nome: "balcao-01", ip: "BALCAO-01", tipo: 135 },
		{ nome: "cassio", ip: "GESTORPECAS", tipo: 135 },
		{ nome: "samuel", ip: "PECAS02", tipo: 135 },
		{ nome: "yann", ip: "PECAS03", tipo: 135 },
		{ nome: "gerson", ip: "PECAS07", tipo: 135 },
		{ nome: "leo", ip: "PECAS08", tipo: 135 },
		{ nome: "renilton", ip: "PECAS05", tipo: 135 },
		{ nome: "ZEESTOQUE", ip: "ZEESTOQUE", tipo: 135 },
		{ nome: "ESTOQUE2", ip: "ESTOQUE2", tipo: 135 },
	];

	var vemar = [
		{ nome: "Sandra", ip: "SANDRA-VEMAR", tipo: 135 },
		{ nome: "Fernando", ip: "GESTOR-VEMAR", tipo: 135 },
		{ nome: "rosangela", ip: "VEMAR-ADM02", tipo: 135 },
		{ nome: "Emilly", ip: "VEMAR-ADM01", tipo: 135 },
		{ nome: "Vendedor 01", ip: "VENDEDORES-VEMA", tipo: 135 },
		{ nome: "Vendedor 02", ip: "VENDEDORVEMAR", tipo: 135 },
	];

	var nac = [
		{ nome: "William", ip: "GESTOR-NAC", tipo: 135 },
		{ nome: "Lilian", ip: "ACESSORIOS", tipo: 135 },
		{ nome: "Walquiria", ip: "NAC04", tipo: 135 },
		{ nome: "NAC01", ip: "NAC01", tipo: 135 },
	];

	var central = [
		{ nome: "Edilene", ip: "CENTRAL-SUP", tipo: 135 },
		{ nome: "MESA", ip: "CENTRAL01", tipo: 135 },
		{ nome: "Stephany", ip: "CENTRAL02", tipo: 135 },
		{ nome: "Erika", ip: "CENTRAL03", tipo: 135 },
		{ nome: "Mayara", ip: "CENTRAL04", tipo: 135 },
		{ nome: "Eliseu", ip: "CENTRAL05", tipo: 135 },
		{ nome: "Fernanda", ip: "CENTRAL07", tipo: 135 },
	];

	var terceiro = [
		{ nome: "Despachante", ip: "DESPACHANTE", tipo: 135 },
		{ nome: "Sinistro", ip: "SINISTRO", tipo: 135 },
		{ nome: "Diana", ip: "FISCAL01", tipo: 135 },
		{ nome: "Paulo", ip: "CONTABILIDADE02", tipo: 135 },
		{ nome: "CAR34", ip: "CAR34", tipo: 135 },
		{ nome: "ZENAIDE-PC", ip: "ZENAIDE-PC", tipo: 135 },
		{ nome: "DP02", ip: "DP02", tipo: 135 },
		{ nome: "RH-NOTE", ip: "RH-NOTE", tipo: 135 },
		{ nome: "MARTECAIXA", ip: "MARTECAIXA", tipo: 135 },
	];

	var consultores = [
		{ nome: "CONSULTOR01", ip: "CONSULTOR01", tipo: 135 },
		{ nome: "CONSULTOR02", ip: "CONSULTOR02", tipo: 135 },
		{ nome: "CONSULTOR03", ip: "CONSULTOR03", tipo: 135 },
		{ nome: "CONSULTOR04", ip: "CONSULTOR04", tipo: 135 },
		{ nome: "GESTORSERVICOS", ip: "GESTORSERVICOS", tipo: 135 },
		{ nome: "ELIANE", ip: "ELIANE", tipo: 135 },
		{ nome: "PROGRAMADOR", ip: "PROGRAMADOR", tipo: 135 },
		{ nome: "RECEPCAOCONSULT", ip: "RECEPCAOCONSULT", tipo: 135 },
		{ nome: "RECEPTIVO-ATC", ip: "RECEPTIVO-ATC", tipo: 135 },
	];

	var garantia = [
		{ nome: "CHEFEOFICINA", ip: "CHEFEOFICINA", tipo: 135 },
		{ nome: "GARANTIA01", ip: "GARANTIA01", tipo: 135 },
		{ nome: "GARANTIA-02", ip: "GARANTIA-02", tipo: 135 },
		{ nome: "OFICINA-01", ip: "OFICINA-01", tipo: 135 },
		{ nome: "OFICINA-02", ip: "OFICINA-02", tipo: 135 },
	];

	for( i=0 ; i < links2.length ; i++){
		check2(links2[i].nome, links2[i].ip, links2[i].tipo);
		total++;
	}

	for( i=0 ; i < garantia.length ; i++){
		check(garantia[i].ip, garantia[i].ip, garantia[i].tipo);
		total++;
	}

	for( i=0 ; i < consultores.length ; i++){
		check(consultores[i].ip, consultores[i].ip, consultores[i].tipo);
		total++;
	}

	for( i=0 ; i < terceiro.length ; i++){
		check(terceiro[i].ip, terceiro[i].ip, terceiro[i].tipo);
		total++;
	}

	for( i=0 ; i < central.length ; i++){
		check(central[i].ip, central[i].ip, central[i].tipo);
		total++;
	}

	for( i=0 ; i < nac.length ; i++){
		check(nac[i].ip, nac[i].ip, nac[i].tipo);
		total++;
	}

	for( i=0 ; i < vemar.length ; i++){
		check(vemar[i].ip, vemar[i].ip, vemar[i].tipo);
		total++;
	}

	for( i=0 ; i < financeiro.length ; i++){
		check(financeiro[i].nome, financeiro[i].ip, financeiro[i].tipo);
		total++;
	}

	for( i=0 ; i < vetor.length ; i++){
		check(vetor[i].nome, vetor[i].ip, vetor[i].tipo);
		total++;
	}

	for( i=0 ; i < novos.length ; i++){
		check(novos[i].nome, novos[i].ip, novos[i].tipo);
		total++;
	}

	for( i=0; i < seminovos.length; i++){
		check(seminovos[i].nome, seminovos[i].ip, seminovos[i].tipo);
		total++;
	}

	for( i=0; i < frotas.length; i++){
		check(frotas[i].nome, frotas[i].ip, frotas[i].tipo);
		total++;
	}

	for( i=0; i < pecas.length; i++){
		check(pecas[i].nome, pecas[i].ip, pecas[i].tipo);
		total++;
	}

	online = $('.online').length;
	offline	= $('.offline').length;

	document.getElementById("total").innerHTML = total;
	document.getElementById("on").innerHTML = online-1;
	document.getElementById("off").innerHTML = offline-1;
}


function check(nome, ip, tipo){

	$.ajax({
		type: "GET",
	  	url: "check.php",
	  	dataType: "html",
	  	data: {
	  		ip: ip,
	  		tp: tipo
	  	},
	  	success: function(result){
    		$("." + nome).html(result);
  		}
  	});	
}

function check2(nome, ip, tipo){

	$.ajax({
		type: "GET",
	  	url: "check2.php",
	  	dataType: "html",
	  	data: {
	  		ip: ip,
	  		tp: tipo
	  	},
	  	success: function(result){
    		$("." + nome).html(result);
  		}
  	});	
}