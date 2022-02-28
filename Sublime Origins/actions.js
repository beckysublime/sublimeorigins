actions = [
	{
		shortcut: 'h',
		id: 'help',
		start: function () {
			outputs.push('Available Actions:')
			for (i = 0; i < actions.length; i++) {
				outputs.push('(' + actions[i].shortcut + ') ' + actions[i].id + '')
			}
		}
	},
	{
		shortcut: 'e',
		id: 'explore',
		start: function () {
			outputs.push('You are in a lime forest.')
		}
	},
]