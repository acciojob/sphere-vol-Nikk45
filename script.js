function volume_sphere() {
    //Write your code here
	let input = document.getElementsByTagName("input")[0].value;
  const volume = (4 / 3) * (Math.PI) * Math.pow(input, 3);
	// document.getElementById("res").innerText = volume;
	// p.innerText(volume);
	
  document.getElementById("volume").value = volume.toFixed(4);
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
