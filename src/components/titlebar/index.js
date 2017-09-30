import React, {Component} from 'react'
import Login from '../login'
import Register from '../register'
import Logout from '../logout'

export default class Titlebar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      login: false,
      register: false
    }
    this.onButtonClick = this.onButtonClick.bind(this)
    this.setLoginState = this.setLoginState.bind(this)
    this.setRegisterState = this.setRegisterState.bind(this)
  }

  onButtonClick (e) {
    const {state} = this
    const {name} = e.target
    const obj = {}
    obj[name] = !state[name]
    this.setState(obj)
  }
  
  setLoginState () {
    this.setState({login: false})
  }

  setRegisterState () {
    this.setState({register: false})
  }

  render () {
    const {login, register} = this.state
    const {loggedIn} = this.props
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {!loggedIn && <div style={{display: 'flex', flexDirection: 'column'}}>
          {!loggedIn && <button name="login" onClick={this.onButtonClick}>Log In</button>}
          { login && <Login setAppState={this.props.setAppState} setLoginState={this.setLoginState}/> }
        </div>}
        {!loggedIn && <div style={{display: 'flex', flexDirection: 'column'}}>
          <button name="register" onClick={this.onButtonClick}>Register</button>
          { register && <Register setAppState={this.props.setAppState} setRegisterState={this.setRegisterState} /> }
        </div>}
        { loggedIn && <Logout setAppState={this.props.setAppState} /> }
      </div>
    )
  }
}

// add onclick listener to modal. potential make modal background with no vision and click on that