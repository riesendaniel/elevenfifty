import React, { Component } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import bild from './logo1150_komplett.jpg';
import './App.css';

const
  Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );

const
  Vorgeschichte = () => (
    <div>
      <h1>Vorgeschichte</h1>
      <div className="list-type1">
        <ul>
          <li><a>Aus dem Kreise der Präsidenten der Pro Rafz wurde die Idee im Jahr 2020 das
            “Jubiläumsjahr 1150 Jahre Rafz“ zu feiern geäussert.
          </a></li>
          <li><a>Die letzte Jubiläumsfeier wurde im Jahr 1970 mit nachhaltiger Wirkung bei den
            Organisatoren und der aktiven Bevölkerung gefeiert. (Rafz wurde erstmals 870
            urkundlich erwähnt)
          </a></li>
          <li><a>Der Gedanke jede Generation soll bei einer Jubiläumsfeier mitwirken können
            und
            Erinnerungen behalten, wurde positiv aufgenommen.
          </a></li>
          <li><a>Die Pro Rafz hat aufgrund der positiven Signale des Gemeinderats und der
            Bereitschaft sich am Jubiläum aktiv und finanziell zu beteiligen sich bereit
            erklärt
            die Durchführung der Herbstmesse 2019 zu übernehmen und das noch zu bildende OK
            für
            die 1150 Jahrfeier aktiv zu unterstützen
          </a></li>
          <li><a>Am 3. Mai 2017 fand ein öffentlicher Workshop/ Gedankenaustausch betreffend
            Organisation und Ideen für die Jubiläumsfeier statt. Die Rafzer-Bewohner wurden im
            Mittelungsblatt aufgefordert ihre Ideen einzubringen.
          </a></li>
        </ul>
      </div>
    </div>
  );

class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <h1 className="App-title">1150 Jahre Rafz</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/vorgeschichte">Vorgeschichte</Link>
                </li>
              </ul>
            </header>
            <p className="App-intro">
              <div className="content">
                <Switch>
                  <Route path="/vorgeschichte" component={Vorgeschichte}/>
                  <Route path="/" component={Home}/>
                </Switch>
              </div>
              <img src={bild} className="Rafz-logo" alt="logo"/>
            </p>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
