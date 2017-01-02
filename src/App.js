import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import boxStyles from './Box.css';

class Box extends Component {
  constructor(props) {
    super(props)
    this.state ={
      hasFocus: false
    }
    this.toggleFocus = this.toggleFocus.bind(this)
  }
  toggleFocus() {
    this.setState({
      hasFocus: !this.state.hasFocus
    })
  }
  render() {
    const width = this.state.hasFocus ? { width: "300px", height: "300px" } : { width: "200px", height: "200px" }
    return (
      <div className={styles.box} style={width}>
        test
        <button onClick={this.toggleFocus}>Click</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = {
      items: []
    }
    this.handleAddBox = this
      .handleAddBox
      .bind(this)
  }
  handleAddBox() {
    const items = this
      .state
      .items
      .concat([this.state.items.length])
    this.setState({items})
  }
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.App_header}>
          <img src={logo} className={styles.App_logo} alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div>
          <button onClick={this.handleAddBox}>
            add box</button>
          <ReactCSSTransitionGroup
            transitionName={boxStyles}
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1500}>
            {this
              .state
              .items
              .map((box) => {
                return <Box key={box}/>
              })}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
