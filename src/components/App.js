import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {

    super(props);

    this.recipes = recipes.results;

    this.state = {
      query: ''

    };
    
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

clearQuery = () => {
    this.updateQuery('')
}
  render() { 
    

    return (
      
      <div className="App">
        <Navbar result={recipes}
        query={this.state.query}
        searchString={this.state.searchString}
        updateQuery={this.handleInputChange}
        />
        <div className="container mt-10">
          <div className="row">
          {this.recipes.map(result => (
            <RecipeItem
            key={result.title}
            title={result.title}
            ingredients={result.ingredients}
            thumbnail={result.thumbnail}
            href={result.href}
            />
          ))}
          </div>
          <p>{this.state.query}</p>
        </div>
      </div>
    );
  }
}

export default App;
