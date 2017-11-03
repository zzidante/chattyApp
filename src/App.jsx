import React, {Component} from 'react';

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
      this.socket.addEventListener('message', (message) => {
        let messages = [ ...this.state.messages, JSON.parse(message.data)]

        this.setState({ messages });
        console.log(this.state);
      });
    }
  }


  onNewPost(content, username) {
    const messages = ({id:  '',  username: username , content: content})
    this.socket.send(JSON.stringify({ messages }));
  }


  onNewUsername(username) {
    // this.setState({messages: [{name: username}]});
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
