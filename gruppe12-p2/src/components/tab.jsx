import React, { Component } from "react";
import Sound from "./sound";
import Jsontexts from "./jsontexts";

class Tab extends Component {
  state = {
    initalRender: false,
    image: ""
  };

  componentDidMount() {
    this.setState({
      initalRender: true
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("Compnent updated; recived new props", nextProps);
    if (this.props.tabIndex !== this.props.activeTab + 1) {
      //If tab wasn't active before
      if (nextProps.activeTab + 1 === this.props.tabIndex) {
        //if tab will be active after receiving props
        if (
          //If a category has been chosen for each media type
          nextProps.musicSelected !== "" &&
          nextProps.svgSelected !== "" &&
          nextProps.textSelected !== ""
        ) {
          this.setState({
            initalRender: false //remove initial message
          });
          this.updateTabContent(nextProps); //render content based on selector choice
        }
      }
    }
    if (this.props.tabIndex === this.props.activeTab + 1) {
      //If tab is currently active
      if (
        //if there is a change in category for at least one type of media
        this.props.musicSelected !== nextProps.musicSelected ||
        this.props.svgSelected !== nextProps.svgSelected ||
        this.props.textSelected !== nextProps.textSelected
      ) {
        if (
          //If a category has been chosen for each media type
          nextProps.musicSelected !== "" &&
          nextProps.svgSelected !== "" &&
          nextProps.textSelected !== ""
        ) {
          this.setState({
            initalRender: false //remove initial message
          });
          this.updateTabContent(nextProps); //render content based on selector choice
        }
      }
    }
  }

  translateSelected = categoryString => {
    //translate the category (in form of a string) into a integer
    let c = null;
    if (categoryString === "Random") {
      c = 0;
    }
    if (categoryString === "Funny") {
      c = 1;
    }
    if (categoryString === "Awsome") {
      c = 2;
    }
    return c;
  };

  updateTabContent = props => {
    console.log("Please update the content :)");
    let c = this.translateSelected(props.svgSelected);
    this.getImage(this.props.tabIndex, c);
    //TODO: change content of tab, not only for svg, but also for text + sound
  };

  createInitalRender = () => {
    //Standard message, displayed when all categories haven't been selected
    return (
      <span>
        Please select categories on the right from which to generate art.
      </span>
    );
  };

  getImage = (index, svgSelected) => {
    //gets url for image to be loaded
    let url = "/resources/Graphics/" + svgSelected + index + ".svg";
    console.log(url, this.props.tabIndex);
    this.loadImage(url);
  };

  loadImage = url => {
    //set tab's image property into the svg at the url, rendering the image at #imageDiv
    fetch(url)
      .then(response => response.text())
      .then(svg =>
        this.setState({
          image: svg
        })
      );
  };

  render() {
    let content;
    if (this.state.initalRender) {
      //if the categories haven't been selected yet, display standard message
      content = this.createInitalRender();
    } else {
      //otherwise, render selected content
      content = (
        <div className="tabContent">
          <div
            className="imageDiv"
            dangerouslySetInnerHTML={{ __html: this.state.image }}
          />
          <Jsontexts textSelected={this.props.textSelected} index={this.props.tabIndex} />
          <Sound
            category={this.translateSelected(this.props.musicSelected)}
            index={this.props.tabIndex}
          />
        </div>
      );
    }
    return <div>{content}</div>;
  }
}
export default Tab;
