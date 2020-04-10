import React from 'react';
import './App.css';
import axios from "axios"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
     this.setState({
        teams: res.data
      })
      console.log("API data:", res.data)
    })
  }








  render() {
    return (
      <div>
        <h1>World Cup Teams Rankings</h1>
      </div>
    )
  }

}

export default App;
