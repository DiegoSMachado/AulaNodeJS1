// console.log("Iniciando Notes.js");
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};



var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes(); //Buscar todas as notas
  var note = {title,body};

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes(); //Buscar todas as notas
  var note = {title};
  console.log(note);
  var searchNotes = notes.filter((note) => note.title == title);
  console.log(searchNotes);
  return searchNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes(); //Buscar todas as notas
  var note = {title};
  var delNotes = notes.filter((note) => note.title == title);
  var otherNotes = notes.filter((note) => note.title !== title);
  if(delNotes.length !== 0){
    saveNotes(otherNotes);
    return title;
  }
};

var logNote = (note) => {
  console.log('------------');
  console.log('Titulo: ' + note.title);
  console.log('Titulo: ' + note.body);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  logNote,
  removeNote
};
