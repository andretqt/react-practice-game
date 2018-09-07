import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json"
import FriendCard from "./components/FriendCard/";
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

class App extends Component {
  //define the state
  state = {
    images,
    score: 0,
    id: '',
    topScore: 0
  };
  rearrange = (id) => {
    if (id !== this.state.id) {
      console.log(id);
      this.setState(shuffle(images));
      this.setState({score: this.state.score + 1});
      this.setState({id: id});
      this.setState({topScore: Math.max(this.state.score + 1,this.state.topScore)})
    } else {
      this.setState({score: 0});
      this.setState(shuffle(images));
      this.setState({id: id});
    }
  }
  render () {
    return (
      <Wrapper>
        <Title>click game</Title>
        <div>
          <h3> Score counter</h3>
          <p>current id: {this.state.id}</p>
          <p>Score: {this.state.score}</p>
          <p>Top Score: {this.state.topScore}</p>
        </div>
        {this.state.images.map(image => (
          <FriendCard
          rearrange={this.rearrange}
          name={image.name}
          image={image.image}
          id={image.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
