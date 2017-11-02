import React, {Component} from 'react';
import uniqueID from 'uuid';

import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.onNewPost = this.onNewPost.bind(this);
    this.onNewUsername = this.onNewUsername.bind(this);

    this.state = {
      currentUser: { name: '' },
      messages: []
    };
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = (event) => {
      console.log('ws was opened', event);
      this.socket.send("jo mammmmma");
      this.socket.addEventListener('message', (message) => {
        console.log('Message from server: ' + message.data)
      });
    }
  }


  onNewPost(message) {
    if(message.keyCode===13) { 
      const currentUser = this.state.currentUser;
      const uID = uniqueID();
      const messages = ([{id:  uID }, {username: currentUser }, {content: message.target.value}])

      this.socket.send(JSON.stringify({currentUser, messages}));
      message.target.value = '';
    }
  }


  onNewUsername(event) {

    let username = event.target.value; // string    of input
    let name = {name: username}

    this.setState({currentUser: name});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages = { this.state.messages } />
        <Chatbar currentUser = { this.state.currentUser.name } onNewPost = { this.onNewPost } onNewUsername = { this.onNewUsername }/>       {/* pass currentUser.name to Chatbat */}
      </div>
    );
  }
}

export default App;
