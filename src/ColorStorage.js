const myStorage = window.localStorage;

function getStoredColors() {
	console.log(myStorage);
	return JSON.parse(myStorage.getItem("colors")) || [];
}

function setStoredColors(colors) {
	myStorage.setItem("colors", JSON.stringify(colors));
}

export { getStoredColors, setStoredColors };
