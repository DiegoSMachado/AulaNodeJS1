// console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs
.command('add','Adicionado uma nova Mensagem',{
	title:{
		describe:'Adicionando titulo',
		demmand:true,
		alias: 'a'
	},
	body:{
		describe:'Adicionando Nota',
		demmand:true,
		alias: 'b'
	}
})
.command('list','Listando Notas')
.command('read','Lendo Nota especifica',{
	title:{
		describe:'Adicionando titulo',
		demmand:true,
		alias: 't'
	}
})
.command('remove','Removendo Nota especifica',{
	title:{
		describe:'Qual titulo será deletado',
		demmand:true,
		alias: 't'
	}
})
.help()
.argv;
var command = argv._[0];
// console.log('command: ', command);
// console.log('Yargs ',argv);

if (command === 'add'){
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log(note);
		console.log('Nota Criada!');
		notes.logNote(note);
	} else {
		console.log('Titulo já existente');
		console.log('------------');
	}

} else if (command === 'list') {
	var allNotes = notes.getAll();
	var note = [];
	allNotes.forEach((note) => {
		notes.logNote(note);
	});

} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Nota Encontrada');
		notes.logNote(note);
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
