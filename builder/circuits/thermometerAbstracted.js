const thermometer = require('./thermometer');

const Builder = require('../builder');
const inputIds = ['I1', 'I2', 'I3'];

const circuit = 'thermometer';

module.exports = id =>
	new Builder(id)
		.addDescription('A simple three input thermometer circuit')
		.addPath('M52.707,0.5l0,47l-52.207,0l0,-47l52.207,0Z', 50, 50)
		.addName('thermometer abstracted')
		//input A
		.addInput(inputIds[0])
		.addLabel('A')
		.addCoord([10, 200])
		//input B
		.addInput(inputIds[1])
		.addLabel('B')
		.addCoord([10, 300])
		//input C
		.addInput(inputIds[2])
		.addLabel('C')
		.addCoord([10, 400])
		.addCircuit(thermometer, circuit)
		.wireToInput(inputIds[0])
		.wireToInput(inputIds[1])
		.wireToInput(inputIds[2])
		.addLabel('Click Me')
		.addCoord([200, 200])

		// outputs
		.addOutput()
		.wireToInput(circuit, 0)
		.addCoord([450, 157.5])
		// 2
		.addOutput()
		.wireToInput(circuit, 1)
		.addCoord([450, 217.5])
		// 3
		.addOutput()
		.wireToInput(circuit, 2)
		.addCoord([450, 277.5])
		// 4
		.addOutput()
		.wireToInput(circuit, 3)
		.addCoord([450, 337.5])
		// 5
		.addOutput()
		.wireToInput(circuit, 4)
		.addCoord([450, 397.5])
		// 6
		.addOutput()
		.wireToInput(circuit, 5)
		.addCoord([450, 457.5])
		// 7
		.addOutput()
		.wireToInput(circuit, 6)
		.addCoord([450, 517.5])
		.build();
