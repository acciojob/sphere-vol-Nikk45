function volume_sphere() {
    //Write your code here
	let input = document.getElementById("radius").value;
	let volume = (4/3)*Math.PI*Math.pow(input,3);
	document.getElementById("volume").value = volume;
	let p = document.createElement("p").innerText = volume;
	let body = document.getElementsByTagName("body");
	body.appendChild(p);
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
