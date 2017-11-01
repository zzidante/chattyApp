import React , {Component} from 'react';

class Chatbar extends Component {
  render() {
    const currentUser = this.props.currentUser; {/* grab currentUser.name from App */}
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={ currentUser } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}
  
  export default Chatbar;