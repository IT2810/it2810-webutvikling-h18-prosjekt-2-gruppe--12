import React, { Component } from "react";

//Example from react docs used and rewritten here

class Jsontexts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      texts: []
    };
  }

  getText = props => {
    fetch("./resources/text/text.json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            texts: result[props.textSelected]
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    return null;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props.textSelected) {
      this.getText(nextProps);
    }
  }

  render() {
    const { error, isLoaded, texts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="textDiv">{texts[this.props.index - 1].toString()}</div>
      );
    }
  }
}

export default Jsontexts;
