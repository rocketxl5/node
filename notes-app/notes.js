fs = require('fs');

const getNotes = function () {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  notes.push({
    title,
    body
  });
  console.log(notes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote
};

// module.exports = getNotes;
// const add = function (a, b) {
//   return a + b;
// };

// module.exports = add;
