import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    //We need to go and fetch wather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          className="form-control"
          placeholder="Get a five day forcast in your favorite city"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }


}




// export default connect()(SearchBar)