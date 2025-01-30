import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

export default function NoteItem({ id, title, body, createdAt, onDelete, onArsip, archived }) {
  return (
    <article className="flex flex-col border-solid border border-neutral-200/40 rounded-xl p-4 bg-neutral-600/60 md:min-h-[300px] shadow-xl shadow-neutral-950/25">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} onDelete={onDelete} onArsip={onArsip} archived={archived} />
    </article>
  );
}
