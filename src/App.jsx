import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.onNewPost = this.onNewPost.bind(this);
    this.onNewUsername = this.onNewUsername.bind(this);
    this.notifyOnUsernameChange = this.notifyOnUsernameChange.bind(this);

    this.state = {
      currentUser: { name: 'anonymous' },
      messages: []
    };
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = (event) => {
      this.socket.addEventListener('message', (message) => {
        const dataFromServer = JSON.parse(message.data);
        // console.log("Comes from server ", dataFromServer);

        if(dataFromServer.type === 'clientCount') {
          this.setState({usersOnline: dataFromServer.serverMessage})
        } else {
          let messages = [ ...this.state.messages, dataFromServer]  // add new messages to the current state
          this.setState({ messages });  // update the state with this list
        }
      });
    }
  }

  onNewPost(content, username) {
    const messages = ({type: 'postMessage', username: username , content: content})
    this.socket.send(JSON.stringify({ messages }));  // send the New Post object to server
  }

  onNewUsername(username) {
    this.setState({currentUser: {name: username}});
  }

  notifyOnUsernameChange(boolean, newName, oldName) {
    if (boolean) {
      const notificationString = `${oldName} changed their name to ${newName}`
      const notification = ({notification: notificationString, type: 'postNotification' })
      this.socket.send(JSON.stringify({ messages: notification }));
    }
  }

  render() {
    return (
      <div>
        <NavBar usersOnline = {this.state.usersOnline}/>
        <MessageList messages = { this.state.messages } />
        <Chatbar currentUsername = { this.state.currentUser.name } notifyOnUsernameChange = {this.notifyOnUsernameChange} onNewPost = { this.onNewPost } onNewUsername = { this.onNewUsername }/>       {/* pass currentUser.name to Chatbat */}
      </div>
    );
  }
}

export default App;

