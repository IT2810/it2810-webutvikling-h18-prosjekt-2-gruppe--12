import React, { Component } from "react";
import "./App.css";
import "./styles/Tabs.css";
import "./styles/Selector.css";
import Tabs from "./components/tabs";
import Tab from "./components/tab";
import Selector from "./components/selector";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicSelected: "",
      svgSelected: "",
      textSelected: ""
    };
  }

  handleCallbackFromSelector = selected => {
    if (selected) {
      let section = selected.split(" ")[0];
      let category = selected.split(" ")[1];
      if (section === "Music") {
        this.setState({
          musicSelected: category
        });
      } else if (section === "SVG") {
        this.setState({
          svgSelected: category
        });
      } else {
        this.setState({
          textSelected: category
        });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Tabs>
          <Tab
            label="Tab 1"
            tabIndex={1}
            musicSelected={this.state.musicSelected}
            svgSelected={this.state.svgSelected}
            textSelected={this.state.textSelected}
          />
          <Tab
            label="Tab 2"
            tabIndex={2}
            musicSelected={this.state.musicSelected}
            svgSelected={this.state.svgSelected}
            textSelected={this.state.textSelected}
          />
          <Tab
            label="Tab 3"
            tabIndex={3}
            musicSelected={this.state.musicSelected}
            svgSelected={this.state.svgSelected}
            textSelected={this.state.textSelected}
          />
          <Tab
            label="Tab 4"
            tabIndex={4}
            musicSelected={this.state.musicSelected}
            svgSelected={this.state.svgSelected}
            textSelected={this.state.textSelected}
          />
        </Tabs>
        <Selector
          getSelected={selected => this.handleCallbackFromSelector(selected)}
        />
      </div>
    );
  }
}

export default App;
