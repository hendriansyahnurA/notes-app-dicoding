import React from 'react';

export default function ArsipButton({ id, onArsip, arsipd }) {
  const buttonText = arsipd ? 'aktifkan' : 'Arsipkan';
  return (
    <button
      className="bg-cyan-500/80 hover:bg-cyan-500/70 focus:bg-cyan-500/60 rounded p-1 pb-1.5 px-2.5 text-sm font-medium cursor-pointer"
      onClick={() => onArsip(id)}
    >
      {buttonText}
    </button>
  );
}
