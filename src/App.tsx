import {Component} from 'react';
import './App.scss';
import { TokenCardHolder } from './components/token-card-holder/token-card-holder';

export class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <TokenCardHolder tokenMainCode="TEST"/>
        </header>
      </div>
    );
  }
}
