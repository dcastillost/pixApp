import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => { //Define as arrow function for binding of 'this'
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    // this.setState({ spans: spans });
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img alt={description} ref={this.imageRef} src={urls.regular} onLoad={this.setSpans} />
      </div>
    );
  }
}

export default ImageCard;