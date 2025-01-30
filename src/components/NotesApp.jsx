import React from 'react';
import { getData, showFormattedDate } from '../data';
import NotesHeader from './NotesHeader';
import NoteBody from './NotesBody';
import Swal from 'sweetalert2';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      searchQuery: '',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: 'Apakah kamu yakin?',
      text: 'Catatan yang dihapus tidak bisa dikembalikan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });

        Swal.fire({
          title: 'Terhapus!',
          text: 'Catatan telah dihapus.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
    });
  }

  onSearchHandler({ titleQuery }) {
    this.setState({ searchQuery: titleQuery });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],
      };
    });
  }

  onArsipHandler(id) {
    const iconArsip =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" fill="currentColor" /></svg>';

    const targetNote = this.state.notes.find((note) => note.id === id);
    const isArsip = targetNote.archived;

    Swal.fire({
      title: isArsip ? 'Apakah Kamu Yakin' : 'Apakah Kamu Yakin',
      text: isArsip ? 'Catatan akan diaktifkan Kembali' : 'Catatan akan diarsipkan!',
      icon: 'success',
      iconHtml: iconArsip,
      showCancelButton: true,
      confirmButtonColor: '#CBA35C',
      cancelButtonColor: '#d33',
      confirmButtonText: isArsip ? 'Ya, Aktifkan!' : 'Ya, Arsipkan!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        targetNote.archived = !isArsip;
        // targetNote.arsipd == false ? (targetNote.arsipd = true) : (targetNote.arsipd = false);
        const notes = this.state.notes;
        this.setState({ notes });

        Swal.fire({
          title: isArsip ? 'Diaktifkan' : 'Terarsipkan',
          text: isArsip ? 'Catatan telah diaktifkan kembali' : 'Catatan telah diarsipkan',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
    });
  }

  render() {
    return (
      <div className="bg-gray-600">
        <div className="pt-12 px-12">
          <NotesHeader searchNote={this.onSearchHandler} />
        </div>
        <section className="flex flex-col items-center w-full bg-gray-600">
          <NoteBody
            notes={this.state.notes}
            addNote={this.onAddNoteHandler}
            onDelete={this.onDeleteHandler}
            onSearch={this.state.searchQuery}
            onArsip={this.onArsipHandler}
          />
        </section>
      </div>
    );
  }
}

export default NoteApp;
