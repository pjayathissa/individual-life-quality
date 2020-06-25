var inputCounter = 1

var createNewInput = function() {
	let inputGoals = document.getElementById('input-goals')
	console.log('adding new goal')

	let newInput = '<input oninput=modifyInput(this) id="goal-' + inputCounter +'" class="goals input-reset ba b--white-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc">'
	let newDiv = document.createElement('div')
	newDiv.innerHTML = newInput


	inputGoals.appendChild(newDiv)

	let sliderTemplate = document.getElementById('slider-template')
	const node = document.importNode(sliderTemplate.content, true);
	node.querySelector('.customTitle').id = 'goal-title-' + inputCounter;
	node.querySelector('.slider-value').id = 'slider-' + inputCounter +'-value';
	node.querySelector('.rangeClass').id = 'slider-' + inputCounter;
	node.querySelector('.importance-slider-value').id = 'importance-slider-' + inputCounter + '-value';
	node.querySelector('.importanceRangeClass').id = 'importance-slider-' + inputCounter;
	document.getElementById('input-sliders').appendChild(node)
	inputCounter+=1
}

var modifyInput = function(element) {
	let refNumber = element.id.split('-')[1]
	let goalTitle = document.getElementById('goal-title-' + refNumber)
	goalTitle.innerHTML = element.value
}