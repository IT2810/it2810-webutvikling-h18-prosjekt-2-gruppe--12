import React, { Component } from "react";

class Tab extends Component {
  state = {
    initalRender: false
  };

  componentDidMount() {
    this.setState({
      initalRender: true
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("Compnent updated; recived new props", nextProps);
    if (this.props.tabIndex !== this.props.activeTab + 1) {
      if (nextProps.activeTab + 1 === this.props.tabIndex) {
        if (
          nextProps.musicSelected !== "" &&
          nextProps.svgSelected !== "" &&
          nextProps.textSelected !== ""
        ) {
          this.setState({
            initalRender: false
          });
          this.updateTabContent();
        }
      }
    }
    if (this.props.tabIndex === this.props.activeTab + 1) {
      if (
        this.props.musicSelected !== nextProps.musicSelected ||
        this.props.svgSelected !== nextProps.svgSelected ||
        this.props.textSelected !== nextProps.textSelected
      ) {
        if (
          nextProps.musicSelected !== "" &&
          nextProps.svgSelected !== "" &&
          nextProps.textSelected !== ""
        ) {
          this.setState({
            initalRender: false
          });
          this.updateTabContent();
        }
      }
    }
  }

  updateTabContent = () => {
    console.log("Please update the content :)");
    //TODO: change content of tab
  };

  createInitalRender = () => {
    return (
      <span>
        Please select categories on the right from which to generate art.
      </span>
    );
  };

  render() {
    let content;
    if (this.state.initalRender) {
      content = this.createInitalRender();
    } else {
      content = (
        <div>
          This is the tab content for {this.props.tabIndex}
          <br />
          Music: {this.props.musicSelected}
          <br />
          SVG: {this.props.svgSelected}
          <br />
          Text: {this.props.textSelected}
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default Tab;
