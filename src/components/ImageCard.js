import React from 'react';

class ImageCard extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {span: 0};

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setGridSpans);
  }

  setGridSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({span: spans});
  }  

  render() {
    const { urls, description } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
        <img ref={this.imageRef} src={urls.small} alt={description} />
      </div>

    );
  }
}

export default ImageCard;