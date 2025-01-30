import React from 'react';
import NotesTitleCount from './NotesTitileCount';
import NotesBodyCount from './NotesBodyCount';
import Swal from 'sweetalert2';

class Notesinput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      count: 50,
      countBody: 100,
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    const count = -(e.target.value.length - 50);
    if (count >= 0) {
      this.setState({
        title: e.target.value,
        count: count,
      });
    }
  }

  onBodyChangeEventHandler(e) {
    const countBody = -(e.target.value.length - 100);
    if (countBody >= 0) {
      this.setState({
        body: e.target.value,
        countBody: countBody,
      });
    }
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);

    Swal.fire({
      title: 'Berhasil!',
      text: 'Catatan berhasil ditambahkan.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="card  bg-white shadow-lg rounded-2xl p-6 mt-10 m-9">
            <div className="flex justify-between items-center">
              <NotesTitleCount count={this.state.count} />
              <h1 className="mb-5 text-xl font-bold text-end underline">Buat Catatan</h1>
            </div>
            <input
              className="form-control border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              type="text"
              placeholder="Judul Catatanmu..."
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <NotesBodyCount countBody={this.state.countBody} />
            <textarea
              className="form-control border mt-3 border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Keterangan..."
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
              cols="30"
              rows="6"
            />
            <button
              type="submit"
              className="bg-cyan-500 py-2 rounded-md font-semibold shadow-md hover:bg-cyan-500/90 focus:bg-cyan-500/80 w-full cursor-pointer"
            >
              Tambah Catatan
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Notesinput;
