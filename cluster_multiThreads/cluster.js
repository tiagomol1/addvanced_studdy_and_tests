const cluster = require('cluster');
const os = require('os');

const cpus = os.cpus();

if(cluster.isMaster) {
	console.log('Thread master');

	cpus.forEach(() => {
		cluster.fork();
	});

	cluster.on('listening', worker => {
		console.log('Processo %d executando slave', worker.process.pid);
	});

	cluster.on('exit', worker => {
		console.log('Slave %d saiu inesperadamente', worker.process.pid);
		cluster.fork();
	});

} else {
	console.log('Thread slave');
	require('./index.js');
}