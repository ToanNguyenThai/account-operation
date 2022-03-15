import React, { Component } from 'react'


import Account_Operation from './Account_Operation/Account_Operation';
class Header extends Component {

  state = {
    form: false,
    find_value: ''
  }

  showForm = () => {
    this.setState({
      form: !this.state.form
    })

  }
  setfindValue = (val) => {
    this.setState({
      find_value: val.target.value
    })
  }
  render() {
    const { cart } = this.context;

    if (this.state.form === true) {
      return (
        <div>


          <div onClick={() => this.showForm()}>SignIn</div>
          <Account_Operation></Account_Operation>

        </div>
      )
    }
    else if (this.state.form === false) {
      return (
        <div onClick={() => this.showForm()}>SignIn</div>
      );
    }

  }

}

export default Header;