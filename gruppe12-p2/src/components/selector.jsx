import React, { Component } from "react";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="selector">
        <div className="music">
          <legend>Music</legend>
          <div>
            <input type="checkbox" id="Random" value="random" />
            <label for="random">Random</label>
          </div>
          <div>
            <input type="checkbox" id="funny" value="funny" />
            <label for="funny">Funny</label>
          </div>
          <div>
            <input type="checkbox" id="awsome" value="awsome" />
            <label for="awsome">Awsome</label>
          </div>
        </div>
        <div className="svg">
          <legend>SVG</legend>
          <div>
            <input type="checkbox" id="Random" name="feature" value="random" />
            <label for="random">Random</label>
          </div>
          <div>
            <input type="checkbox" id="funny" name="feature" value="funny" />
            <label for="funny">Funny</label>
          </div>
          <div>
            <input type="checkbox" id="awsome" name="feature" value="awsome" />
            <label for="awsome">Awsome</label>
          </div>
        </div>
        <div className="text">
          <legend>Text</legend>
          <div>
            <input type="checkbox" id="Random" name="feature" value="random" />
            <label for="random">Random</label>
          </div>
          <div>
            <input type="checkbox" id="funny" name="feature" value="funny" />
            <label for="funny">Funny</label>
          </div>
          <div>
            <input type="checkbox" id="awsome" name="feature" value="awsome" />
            <label for="awsome">Awsome</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Selector;
