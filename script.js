//your JS code here. If required.

let name = document.getElementById("fname");
name.addEventListener("blur", ()=>{
	this.value = this.value.toUpperCase();
})