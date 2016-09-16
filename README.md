# Circle Colors
### Cambiar el color del borde de los circulos conforme hagamos click en los botenes CRI Y SUPERCRI 
<a href="http://1.1m.yt/xE7eRw4.jpg" target="_blank"><img src="http://1.1m.yt/xE7eRw4.jpg" alt="ImgLand.net image" /></a>

### 1. BOTÓN CRI:
Al hacer click en el botón CRI, la acción que se ejecutara será que aparezca un borde de color en el círculo rojo luego en el azul, siguiendo el amarillo y así sucesivamente.
Por lo cual se inicializa un evento que contiene un variable cont (contador), el cual servirá para llevar la cuenta de cuantos clicks hagamos en el botón CRI.
La acción del primer **IF** es de darle un color de borde al primer círculo (rojo) mediante el objeto **style** el cual estable la propiedad de estilo **bordeColor** y utilizamos el atributo **placeholder** para mostrar un texto (color del circulo con borde) en la entrada input, los dos círculos restante (que no deseamos que tengan un borde) tiene el valor de **transparent**, esto hará que estos dos elementos tengan bordes traslúcidos.
Lo mismo sucederá con los otros dos círculos, con la diferencia que el borde de cada uno será de un color distinto y la entrada input mostrara un texto diferente por cada uno.


```javascript
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
```

### 1. BOTÓN SUPERCRI:
A diferencia de botón CRI, el botón SUPERCRI necesita que se escriba en la entrada input el nombre de los colores que los círculos tienen por relleno, de esta manera una vez digitado un texto, se seleccionara el circulo que coincida con este y un borde aparecerá a su alrededor.
Al igual que en la primera parte del ejercicio se hace uso de objeto **style** para darle el borde al círculo seleccionada y volver translucido el borde de los círculos restantes

```javascript
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


```
