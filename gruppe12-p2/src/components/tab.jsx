import React, { Component } from "react";


class Tab extends Component {
  state = {
    initalRender: false,
    image : ""
  };

  componentDidMount() {
    this.setState({
        initalRender: true
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log("Compnent updated; recived new props", nextProps);
    if (
        (this.props.musicSelected !== nextProps.musicSelected ||
      this.props.svgSelected !== nextProps.svgSelected ||
      this.props.textSelected !== nextProps.textSelected)
    ) {
      this.setState({
        initalRender: false
      });
      this.updateTabContent();
    }
  }



  updateTabContent = () => {
    console.log("Please update the content :)");
    let c = 0;
    if(this.props.svgSelected==="Random"){
          c=0;
      }
    if(this.props.svgSelected==="Funny"){
        c=1;
    }
    if(this.props.svgSelected==="Awsome"){
        c=2;
    }

    this.getImage(this.props.tabIndex, c);

    //TODO: change content of tab
  };

  createInitalRender = () => {
    return (
      <span>
        Please select categories on the right from which to generate art.
      </span>
    );
  };

  //this.props.tabIndex,this.props.svgSelected
  getImage = (index,svgSelected) =>{
    let url = "/resources/Graphics/" + svgSelected + index + ".svg";
    console.log(url,this.props.tabIndex);
    this.loadImage(url);
}

  loadImage = (url) => {
      fetch(url)
          .then(response => response.text()).
      then(svg => this.setState({
          image: svg
      }));
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
          <br />
          <div id = "imageDiv" dangerouslySetInnerHTML={{__html: this.state.image}} />;
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default Tab;
