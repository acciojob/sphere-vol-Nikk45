function volume_sphere() {
    //Write your code here
	let input = document.getElementById("radius").value;
	let volume = (4/3)*Math.PI*Math.pow(input,3);
	
	document.getElementsByTagName("input")[1].value = volume;
// var radius = document.getElementById("radius").value;

//   // Calculate the volume using the formula
//   var volume = (4/3) * Math.PI * Math.pow(radius, 3);

//   // Display the volume in the output field
//   document.getElementById("volume").value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
