// console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log('command: ', command);
// console.log('Yargs ',argv);

if (command === 'add'){
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Nota Criada!');
		console.log('------------');
		console.log('Titulo: ' + note.title);
		console.log('Titulo: ' + note.body);
	} else {
		console.log('Titulo já existente');
		console.log('------------');
	}

} else if (command === 'list') {
	notes.getAll();

} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Nota Encontrada!');
		console.log('------------');
		console.log('Titulo: '+note.title);
		console.log('Nota: '+note.body);
	} else {
		console.log('Nota não encontrada');
		console.log('------------');
	}
} else if (command === 'remove') {
	var title = notes.removeNote(argv.title);
	if (title) {
		console.log('Nota Deletada!');
		console.log('------------');
		console.log('Titulo: '+title);
	} else {
		console.log('Nota não encontrada');
		console.log('------------');
	}
} else {
console.log("Comando não reconhecido!");
}
