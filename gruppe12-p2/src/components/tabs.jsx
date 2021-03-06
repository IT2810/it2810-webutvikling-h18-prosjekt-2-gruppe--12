import React, { Component } from "react";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  setTab(index) {
    this.setState(
      {
        activeTab: index
      },
      () => {
        this.refCallback(); //callback to App.js with the selected tabindex
      }
    );
  }

  renderContent() {
    return (
      <div className="tabcontent">
        {this.props.children[this.state.activeTab]}
      </div>
    );
  }

  refCallback = element => {
    this.props.getActiveTab(this.state.activeTab);
  };

  renderLabels() {
    return this.props.children.map((child, index) => (
      <button
        className="tab"
        key={child.props.label}
        ref={this.refCallback}
        onClick={() => {
          this.setTab(index);
          this.renderContent();
        }}
      >
        {child.props.label}
      </button>
    ));
  }

  render() {
    return (
      <div className="tabscontainer">
        <div className="tabs">{this.renderLabels()}</div>
        <div className="content">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Tabs;
