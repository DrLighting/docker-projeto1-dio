function showTime() {
	document.getElementById('Data').innerHTML = new Date().toLocaleDateString();
	document.getElementById('Tempo').innerHTML = new Date().toLocaleTimeString();
}
showTime();
