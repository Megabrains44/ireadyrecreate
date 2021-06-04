const options = document.getElementsByClassName('option')

var previousSeleteced = null;

function makeElementOrange(option){
	option.classList.add("orange")
	const orangeClass = document.getElementsByClassName('orange')[0]
	orangeClass.style.backgroundColor = "rgb(225, 147, 0)";
}
function makePreviousElementWhite(option){
	option.classList.add("white")
	const whiteClass = document.getElementsByClassName('white')[0]
	whiteClass.style.backgroundColor = "white";
}


for (i=0;i<options.length;i++) {
	let option = options[i]
	console.log(option)
	option.addEventListener('click', () => {
		if (!selectedOptions){
			makeElementOrange(option)
			
			previousSeleteced = option; // save last seleteced option to previous selected
			console.log(selectedOptions)
			option.classList.remove('orange')
		} else {
			console.log(selectedOptions)
			
			makeElementOrange(option)
			makePreviousElementWhite(option)
			previousSeleteced = option;
			option.classList.remove('orange')
			selectedOptions.classList.remove('white')
		}	
	})
	// option.addEventListener('mouseover', () => {
	// 	console.log(option)
	// })
	

}



	
	


