import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

export class App extends Component {
  state = { advice: '' }
  componentDidMount(){
    this.fetchAdvide()
  }
  fetchAdvide = ()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
        const {advice} = response.data.slip
        this.setState({advice})
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  render() {
    const {advice} = this.state
    return (
      <div>{advice}</div>
    )
  }
}

export default App