import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

  state = { images: []};
  onSearchSubmit = async(term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });


    this.setState({ images: response.data.results });
    // console.log(this.state.images);

  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} cars

        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;