import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,

    }
  }

  componentDidMount() {
    fetch('UIE-InterviewProject.json')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,

          })
        })
  }

  render() {
    var {isLoaded, items} = this.state;
    console.log(items)
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (

          <div className="App container card-columns">
              {items.map(item => (
                  <div key={item.index} className="card">
                    <img className="card-img-top" src="darktiles_bg_gike55.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">{item.Heading}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{item.Subheading}</h6>
                      <hr/>
                      <p className="card-text text-success text-right">{item.Price}</p>
                    </div>
                  </div>
              ))}

          </div>
      );
    }
  }
}

export default App;
