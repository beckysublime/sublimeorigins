outputs = []
currentOutput = {
	string: 0,
	char: 0,
	text: '',
	time: 0
}

inputOutputs = []
inputOutput = {
	string: 0,
	char: 0,
	text: '',
	time: 0
}

function start() {
	outputs.push('You are in a lime forest.')
	outputs.push("Type 'h' or 'help' to see your available actions.")
	paint()
}

function inputText(key) {
	if (key.key == 'Enter') {
		input = document.getElementById('mainInput').value
		outputs.push('> ' + input)
		document.getElementById('mainInput').value = ''
		
		for (i = 0; i < actions.length; i++) {
			if (input == actions[i].id || input == actions[i].shortcut)
				actions[i].start()
		}
	}
}


function paint () {
	if (outputs[currentOutput.string] != undefined && Date.now() - currentOutput.time > 20) {
		if (outputs[currentOutput.string][currentOutput.char] != undefined) {
			currentOutput.text += outputs[currentOutput.string][currentOutput.char]
			currentOutput.char ++
			currentOutput.time = Date.now()
		}
		else {
			currentOutput.text += '<br>'
			currentOutput.string ++
			currentOutput.char = 0
		}
	}

	document.getElementById('mainOutput').innerHTML = currentOutput.text
	setTimeout(paint, 15)
}