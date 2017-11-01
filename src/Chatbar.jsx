import React , {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser; {/* grab currentUser.name from App */}
    const onNewPost = this.props.onNewPost;
    
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={ currentUser } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp= { onNewPost } />
      </footer>
    )
  }
}
  
  export default Chatbar;