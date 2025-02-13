//your JS code here. If required.

let name = document.getElementById("fname");
name.addEventListener("blur", ()=>{
	let val = name.value;
	name.value = val.toUpperCase();
})