import React, { Component } from "react";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  setTab(index) {
    this.setState({
      activeTab: index
    });
  }

  renderContent() {
    return (
      <div className="tabcontent">
        {this.props.children[this.state.activeTab]}
      </div>
    );
  }
  renderLabels() {
    return this.props.children.map((child, index) => (
      <button
        className="tab"
        key={child.props.label}
        onClick={() => {
          this.setTab(index);
        }}
      >
        {child.props.label}
      </button>
    ));
  }

  render() {
    return (
      <div>
        <div className="tabs">{this.renderLabels()}</div>
        <div className="content">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Tabs;
