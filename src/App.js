import React, {Component} from "react";

class App extends Component {
  constructor(){
    super()
    this.state = {
      temperatureValue: 10,
    }
  }

  incrementTemperature() {
    this.setState({
      temperatureValue: this.state.temperatureValue + 1
    })
  }

  decrementTemperature() {
    this.setState({
      temperatureValue: this.state.temperatureValue -1
    })
  }
  render(){
    return(
      <div className="app-container">
          <div className="temperature-display-container">
              <div className="temperature-display">{this.state.temperatureValue}&#176;C</div>
          </div>
          <div className="button-container">
            <button onClick={()=> this.incrementTemperature()}>+</button>
            <button onClick={()=> this.decrementTemperature()}>-</button>
          </div>
      </div>
    )
  }
}

export default App;
