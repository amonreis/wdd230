// Get the current year from the computer operating system
let d = new Date();
let year = d.getFullYear();
document.getElementById("currentdate").textContent = year;

// Last modified
let lastUp = document.lastModified;
document.getElementById("lastupdate").textContent = lastUp;