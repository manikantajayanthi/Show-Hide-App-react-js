import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstNameDisplay: false, lastNameDisplay: false}

  firstNameElement = () => {
    const {firstNameDisplay} = this.state
    if (firstNameDisplay === true) {
      this.setState({firstNameDisplay: false})
    } else {
      this.setState({firstNameDisplay: true})
    }
  }

  lastNameElement = () => {
    const {lastNameDisplay} = this.state
    if (lastNameDisplay === true) {
      this.setState({lastNameDisplay: false})
    } else {
      this.setState({lastNameDisplay: true})
    }
  }

  render() {
    const {firstNameDisplay, lastNameDisplay} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="inner-container">
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.firstNameElement}
            >
              Show/Hide Firstname
            </button>
            {firstNameDisplay && <p className="display-container">Joe</p>}
          </div>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.lastNameElement}
            >
              Show/Hide Lastname
            </button>
            {lastNameDisplay && <p className="display-container">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
