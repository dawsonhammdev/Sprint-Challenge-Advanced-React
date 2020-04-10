import React from 'react';
import './App.css';
import axios from "axios"
import PlayerCard from "./components/PlayerCard"
import NavBar from "./components/Navbar"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
     this.setState({
        players: res.data
      })
      console.log("API data:", res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className ="App">
        <NavBar />
        <h1>World Cup Teams Rankings</h1>
        <PlayerCard player_data={this.state.players}/>
      </div>
    )
  }

}

export default App;
