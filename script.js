function volume_sphere() {
    //Write your code here
	let input = document.getElementById("radius").value;
	let volume = (4/3)*Math.PI*Math.pow(input,3);
	
	document.getElementsByTagName("input")[1].value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
