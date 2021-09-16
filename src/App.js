import React from 'react';
import data from "./data.json"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
  return (
      <div className="grid-container">
        <header>
          <a href="/">React App</a>
        </header>
        <main>
          <div className="content">
            
          </div>
        </main>

        <footer>
          Jack Bond
        </footer>
      </div>
    );
  }
}

export default App;
