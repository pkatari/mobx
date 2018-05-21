import { observable } from 'mobx';
import { observer }  from 'mobx-react';  // Provides bindings to allow mobx and react to work together
import * as React from 'react';
import './App.css';

// https://www.robinwieruch.de/create-react-app-mobx-decorators/

// Observer makes sure App reacts whenever the observer value changes.
// The reaction leads to a re-rendering of the component
// The method observer in particular is used to modify an existing component so that it responds to changes in a MobX Store.
@observer
class App1 extends React.Component {
    
 // It is used to create observable value
  @observable public counter = 0;

  public onIncrement = () => {
    this.counter++;
  }

  public onDecrement = () => {
    this.counter--;
  }

  public render() {
    return (
      <div>
        {this.counter}

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}

export default App1;
