import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    fields: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      this.setState({
        fields: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        <form>
        <h1>Sign Up For My Web App</h1>
          {this.state.fields.map((field, i) => (
            <input key={i} id={field.id} type={field.type} name={field.id} placeholder={field.label} />
          ))}
        <h2><button type="submit">Submit Form</button></h2>
        </form>
      </div>
    )
  }
}

export default App
