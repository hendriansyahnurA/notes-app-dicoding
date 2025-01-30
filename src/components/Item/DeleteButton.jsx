import React from 'react';

export default function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="bg-red-500 hover:bg-red-500/90 focus:bg-red-500/80 rounded p-1 pb-1.5 px-2.5 text-sm font-medium cursor-pointer"
      onClick={() => onDelete(id)}
    >
      Hapus
    </button>
  );
}
