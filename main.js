window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var cont = 1;
	boton.addEventListener("click", function(){
		if (cont == 1){
			document.getElementsByClassName("circle")[0].style.borderColor = "green";
			document.getElementById("entrada").placeholder = "rojo";
			document.getElementsByClassName("circle")[1].style.borderColor = "transparent";
			document.getElementsByClassName("circle")[2].style.borderColor = "transparent";
		}
		if (cont == 2){
			document.getElementsByClassName("circle")[1].style.borderColor = "orange";
			document.getElementById("entrada").placeholder = "blue";
			document.getElementsByClassName("circle")[0].style.borderColor = "transparent";
			document.getElementsByClassName("circle")[2].style.borderColor = "transparent";
		}
		if (cont == 3){
			document.getElementsByClassName("circle")[2].style.borderColor = "purple";
			document.getElementById("entrada").placeholder = "yellow";
			document.getElementsByClassName("circle")[0].style.borderColor = "transparent";
			document.getElementsByClassName("circle")[1].style.borderColor = "transparent";
			cont = 0;
		}
		cont ++;
	});
	var boton = document.getElementById("super-cri");
	boton.addEventListener("click", function(){
		var entrada = document.getElementById("entrada").value;
		if(entrada == "rojo"){
			document.getElementsByClassName("circle")[0].style.borderColor = "green";
			document.getElementsByClassName("circle")[1].style.borderColor = "transparent";
			document.getElementsByClassName("circle")[2].style.borderColor = "transparent"
		} else if(entrada == "azul"){
			document.getElementsByClassName("circle")[0].style.borderColor = "transparent";
			document.getElementsByClassName("circle")[1].style.borderColor = "orange";
			document.getElementsByClassName("circle")[2].style.borderColor = "transparent"
		}else if(entrada == "amarillo"){
			document.getElementsByClassName("circle")[0].style.borderColor = "transparent";
			document.getElementsByClassName("circle")[1].style.borderColor = "transparent";
			document.getElementsByClassName("circle")[2].style.borderColor = "purple"
		}
	});
});

