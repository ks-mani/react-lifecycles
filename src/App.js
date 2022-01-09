import React from 'react';
import Component1 from './Component1';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    }
    this.showComponentHandler = this.showComponentHandler.bind(this);
  }

  showComponentHandler(e) {
    this.setState((state, props)=>{
      console.log("%c[App.js]", 'color: red; font-size: 15px'," - Current State", state);
      console.log("%c[App.js]", 'color: red; font-size: 15px'," - Current Props", props);
      return {
        showComponent: !state.showComponent
      }
    }, ()=>{
      console.log("%c[App.js]", 'color: red; font-size: 15px'," - Set State Call Back")
    })
  } 

  render() {
    return (
      <> 
        <button onClick={this.showComponentHandler} >Show Component 1</button>
        {
          this.state.showComponent ? <Component1 /> : ''
        }
      </>
    )
  }
}

export default App;