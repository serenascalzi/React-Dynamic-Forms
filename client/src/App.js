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

          {this.state.fields.map((field, i) => {
            
            if (field.type == 'text' || field.type == 'email' || field.type == 'tel') {
              return (
                <div className="input" key={`field-${i}`}>
                  <i className={`fa ${field.icon}`}></i>
                  <input id={field.id} type={field.type} placeholder={field.label} />
                </div>
              )
            }

            if (field.type == 'textarea') {
              return (
                <div className="txt" key={`field-${i}`}>
                  <i className={`fa ${field.icon}`}></i>
                  <textarea id={field.id} type={field.type} placeholder={field.label} />
                </div>
              )
            }

            if (field.type == 'select') {
              return (
                <div className="sel" key={`field-${i}`}>
                  <i className={`fa ${field.icon}`}></i>
                  <select id={field.id}>
                    <option value=''>{field.label}</option>
                    {field.options.map((option, i) => (
                      <option key={`option-${i}`} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              )
            }

          })}

        <h2><button type="submit">Submit Form</button></h2>

        </form>
      </div>
    )
  }
}

export default App
