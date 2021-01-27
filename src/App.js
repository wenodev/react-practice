import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      tasks: [],
      content: ""
    }

  }


  async getTasks() {
    this.state.tasks = await axios.get("http://localhost:8080/tasks"); console.log(this.state.tasks);
    console.log(this.state.tasks);
    console.log(this.state.content);
  }

  componentDidMount() {
    this.getTasks();
  }

  render() {


    return (
      <div>
        {this.state.tasks[0]}
      </div>
    )
  }
}

export default App

