import React, {Component} from 'react';

import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';


  class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        currentUser: {name: 'Freddy'},
        messages: [
          {
            username: 'Cheese',
            content: 'Has anyone seen my marbles?',
          },
          {
            username: 'Lettuce',
            content: 'No, I think you lost them. You lost your marbles Cheese. You lost them for good.'
          }
        ]
      };
    }

    


    render() {
      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
            <MessageList />
            <Chatbar currentUser = { this.state.currentUser } />
        </div>
      );
    }
  }

export default App;
