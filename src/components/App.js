import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.recipes = recipes.results;
    this.state = {
      query: '',
    };
  }

  handleChange = event => {
    this.setState({
      query: event.target.value,
    });
  };

  render() { 
    
    console.log(this.state.query);
    const { query } = this.state
    const { recipes } = this.recipes
    
    const showingRecipes = query === ''
          ? this.recipes
          : this.recipes.filter((c,) => (
            c.title.toLowerCase().includes(query.toLowerCase()) 
        
          ))

    console.log(showingRecipes)
    return (
      
      <div className="App">
        <Navbar result={recipes}
        query={this.state.query}
        searchString={this.state.searchString}
        updateQuery={this.handleChange}
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
        </div>
      </div>
    );
  }
}

export default App;
