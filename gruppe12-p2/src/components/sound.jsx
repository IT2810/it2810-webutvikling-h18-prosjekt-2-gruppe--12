import React, { Component } from "react";

class Sound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      index: props.index
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.category !== nextProps.category ||
      this.state.index !== nextProps.index
    ) {
      this.setState(
        {
          category: nextProps.category,
          index: nextProps.index
        },
        () => {
          this.forceUpdate();
        }
      );
    }
  }

  generateSound = () => {
    if (this.state.category === "") {
      return (
        <div className="sound">
          <audio controls type="audio/mp3" />
        </div>
      );
    } else {
      return (
        <div className="sound">
          <audio
            controls
            src={
              "./resources/sound/" +
              this.state.category +
              "" +
              "" +
              this.state.index +
              ".mp3"
            }
            type="audio/mp3"
          />
        </div>
      );
    }
  };

  render() {
    return this.generateSound();
  }
}

export default Sound;
