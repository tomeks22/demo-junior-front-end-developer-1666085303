import React, {Component} from 'react';
import './scss/main.css';

import Window from './components/Window';
import Content from './components/Content';
import Footer from './components/Footer';
import Bar from './components/Bar';

class App extends Component {
  render() {
    return (
      <div>
        <div>Menu
          <p>nerds.family</p>
          <p>img kółeczko</p>
        </div>
        <Window/>
        <Bar/>
        <hr className="sep"></hr>
        <Content/>
        <Footer/>
      </div>
      
    );
  }
}
export default App;
