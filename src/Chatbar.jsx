import React , {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);

    this.onMessage = this.onMessage.bind(this);
    this.newUsername = this.newUsername.bind(this);

  }

  onMessage(event) {
      event.preventDefault();
      const username = this.refs.username.value;

      if(event.keyCode === 13) { 
        if(username) {
          this.props.onNewPost(event.target.value, username); 
          event.target.value = '';
        } else {
          this.props.onNewPost(event.target.value, 'anonymous'); 
        }
      }
    }

  newUsername(event) {
    if(event.target.value !== this.props.currentUsername) {
      if(event.target.value) {
        this.props.notifyOnUsernameChange(true, event.target.value, this.props.currentUsername);
        this.props.onNewUsername(event.target.value);
        // this.props.sendNameChangeNotification(true);
      } else {
        this.props.notifyOnUsernameChange(true, 'anonymous', this.props.currentUsername);
        this.props.onNewUsername(event.target.value);
      }
    }
  }


  render() {
    return (
      <footer className="chatbar">
        <input 
          className="chatbar-username" 
          placeholder="Your Name (Optional)"
          ref="username" 
          onBlur={ this.newUsername }
        />

        <input 
          className="chatbar-message" 
          placeholder="Type a message and hit ENTER" 
          onKeyUp= { this.onMessage } 
        />
      </footer>
    )
  }
}
  
  export default Chatbar;