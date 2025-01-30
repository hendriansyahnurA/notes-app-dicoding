import React from 'react';
import NoteItem from './Item/NoteItem';

export default function NoteList({ notes, onDelete, onArsip }) {
  if (notes.length > 0) {
    return (
      <div className="grid gap-4 note-list">
        {notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArsip={onArsip} {...note} />
        ))}
      </div>
    );
  } else
    return (
      <div className="flex justify-center bg-neutral-700/30 text-neutral-400 p-8 rounded-md">Tida Ada Catatan</div>
    );
}
