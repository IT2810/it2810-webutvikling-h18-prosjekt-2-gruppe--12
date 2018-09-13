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
    return <div>{this.props.children[this.state.activeTab]}</div>;
  }
  renderLabels() {
    return this.props.children.map((child, index) => (
      <button
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
        {this.renderLabels()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Tabs;
