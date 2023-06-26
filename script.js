function volume_sphere() {
    //Write your code here
	let input = parseFloat(document.getElementById("radius").value);
  const volume = (4 / 3) * Math.PI * Math.pow(input, 3);
	
  document.getElementById("volume").value = volume.toFixed(2);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
