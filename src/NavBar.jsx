import React , {Component} from 'react';

class NavBar extends Component {
  render() {

    if(this.props.usersOnline === 1) {
      return (
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <p className="users-online">{ this.props.usersOnline } user online.</p>
        </nav>
      )
    } else {
      return (
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <p className="users-online">{ this.props.usersOnline } users online.</p>
        </nav>
      )
    }
  }
}
  
export default NavBar;
