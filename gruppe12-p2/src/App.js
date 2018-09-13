import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/Tabs.css";
import "./styles/Selector.css";
import Tabs from "./components/tabs";
import Tab from "./components/tab";
import Selector from "./components/selector";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <Tab label="Tab 1" tabIndex={1} />
          <Tab label="Tab 2" tabIndex={2} />
          <Tab label="Tab 3" tabIndex={3} />
          <Tab label="Tab 4" tabIndex={4} />
        </Tabs>
        <Selector />
      </div>
    );
  }
}

export default App;
