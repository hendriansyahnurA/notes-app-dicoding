import React from 'react';
import Notesinput from './Notesinput';
import NoteList from './NotesList';

export default function NoteBody({ addNote, notes, onDelete, onArsip, onSearch }) {
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(onSearch.toLowerCase()));
  return (
    <div className="flex flex-col py-10 lg:w-4/5 lg:px-20 w-full xs:px-6 gap-4">
      {onSearch === '' && <Notesinput addNote={addNote} />}
      <h2 className="text-xl font-semibold text-cyan-400 pt-8 pb-4">Catatan Aktif</h2>
      <NoteList notes={filteredNotes.filter((note) => note.archived == false)} onDelete={onDelete} onArsip={onArsip} />
      <h2 className="text-xl font-semibold text-cyan-400 pt-8 pb-4">Arsip</h2>
      <NoteList notes={filteredNotes.filter((note) => note.archived == true)} onDelete={onDelete} onArsip={onArsip} />
    </div>
  );
}
