import React, {Component} from 'react';
import bild from './logo1150_komplett.jpg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">1150 Jahre Rafz</h1>
                </header>
                <p className="App-intro">
                    Alle Informationen zum Fest gibt es hier
                </p>
                <img src={bild}  className="Rafz-logo"  alt="logo"/>
            </div>
        );
    }
}

export default App;
