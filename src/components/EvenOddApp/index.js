// Write your code here
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    let authButton
    if (count % 2 === 0) {
      authButton = <p className="description">Count is Even</p>
    } else {
      authButton = <p className="description">Count is Odd</p>
    }
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Count {count}</h1>
          {authButton}
          <button onClick={this.onIncrement} className="button">
            Increment
          </button>
          <p className="tag">*Increase By Random Number Between 0 and 100</p>
        </div>
      </div>
    )
  }
}

export default App
