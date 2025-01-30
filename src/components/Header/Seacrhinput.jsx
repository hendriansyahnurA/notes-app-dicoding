import React from 'react';

class Searchinput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleQuery: '',
    };

    this.onTitleQueryChangeEventHandler = this.onTitleQueryChangeEventHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.titleQuery !== prevState.titleQuery) {
      this.props.searchNote(this.state);
    }
  }

  onTitleQueryChangeEventHandler(event) {
    this.setState((previousState) => {
      return {
        titleQuery: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="card  bg-white shadow-lg rounded-2xl p-6">
        <input
          className="form-control border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="search catatan disini ..."
          value={this.state.titleQuery}
          onChange={this.onTitleQueryChangeEventHandler}
        />
      </div>
    );
  }
}

export default Searchinput;
