// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  counting = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="inner-container">
          <div className="heading-content">
            <h1>Calculate the Letters you enter</h1>
            <br />
            <label htmlFor="text">Enter the phrase</label>
            <br />
            <br />
            <input
              type="text"
              label="Enter the phrase"
              onChange={this.counting}
              name="text"
              id="text"
              placeholder="Enter the phrase"
            />
            <div className="result-container">
              <p>No.of letters: {count}</p>
            </div>
          </div>
          <div className="img-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
