import React from 'react';
import ArsipButton from './ArsipButton';
import DeleteButton from './DeleteButton';

export default function NoteItemAction({ id, onDelete, onArsip, archived }) {
  return (
    <div className="flex justify-end gap-4">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArsipButton id={id} onArsip={onArsip} archived={archived} />
    </div>
  );
}
