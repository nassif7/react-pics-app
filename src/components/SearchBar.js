import React from 'react';


class SearchBar extends React.Component {

  state = { term: '' };

  // onInputChange(e) {
  //   console.log(e.target.value);
  // }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);  //everything related to parent

  }
  render() {
    return (
      <div className="ui segment"> 
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> iamge search </label>
            <input type="text" 
              value={this.state.term}
              onChange={
                (e) => {
                  this.setState({ term: e.target.value })
                } 
              }
            />
          </div>
        </form>  
      </div>
    );
  }

}
export default SearchBar;