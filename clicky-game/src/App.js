import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import images from "./images.json"
import FriendCard from "./components/FriendCard/";
import Navbar from "./components/Navbar/";
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
    images: images,
    score: 0,
    id: '',
    topScore: 0
  };
  rearrange = (id) => {
    if (id !== this.state.id) {
      this.setState({
        images: shuffle(images),
        score: this.state.score + 1,
        id: id,
        topScore: Math.max(this.state.score + 1,this.state.topScore)
      })
    } else {
      this.setState({
        score: 0,
        images: shuffle(images),
        id: id
      })
    }
  }
  render () {
    return (
        <Wrapper>
          <Navbar score={this.state.score} topScore={this.state.topScore}/>
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
