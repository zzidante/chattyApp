import React , {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;   {/* grab currentUser.name from App */}
    const onNewPost = this.props.onNewPost;
    const onNewUsername = this.props.onNewUsername; 
    
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyUp={ onNewUsername }/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp= { onNewPost } />
      </footer>
    )
  }
}
  
  export default Chatbar;