import React , {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const currentUser = this.props.currentUser;   {/* grab currentUser.name from App */}
    // const onNewPost = this.props.onNewPost;
    // const onNewUsername = this.props.onNewUsername; 

    const onMessage = (event) => {
      event.preventDefault();
      const username = this.refs.username.value;

      if(event.keyCode === 13) { 
        this.props.onNewPost(event.target.value, username); 
        event.target.value = '';
      }
    }

    const newUsername = (event) => {
      event.preventDefault();
      this.props.onNewUsername(event.target.value);
    }

    
    return (
      <footer className="chatbar">
        <input 
          className="chatbar-username" 
          placeholder="Your Name (Optional)"
          ref="username" 
          onBlur={ newUsername }
        />

        <input 
          className="chatbar-message" 
          placeholder="Type a message and hit ENTER" 
          onKeyUp= { onMessage } 
        />
      </footer>
    )
  }
}
  
  export default Chatbar;