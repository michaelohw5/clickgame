import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import cards from "./cards.json";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    cards: cards,
    chosen: [],
    score: 0
  }

  checkAndShuffle = (id) => {
    if (!this.state.chosen.includes(id)) {
      console.log("right choice");
      console.log(this.state.chosen);
      // create new chosen array based on current state
      let chosen = [...this.state.chosen];
      // add item to it
      chosen.push(id);
      // set state
      this.setState({ chosen });
      const score = this.state.score + 1;
      this.setState({ score });
      const cards = this.shuffle(this.state.cards);
      this.setState({ cards });
    } else {
      alert("You already chose that");
    }
  }

  shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  };


  render() {
    return (
      <div className="container">
        <Nav 
          score={this.state.score}
        />
        <div className="row content">
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              checkAndShuffle={this.checkAndShuffle}
              name={card.name}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
