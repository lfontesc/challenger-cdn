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

  clearQuery = () => {
    this.setState({
      query: ''
    })
}

  render() { 
    
    console.log(this.state.query);
    const { query } = this.state
    const { recipes } = this.recipes
    
    const showingRecipes = query === ''
          ? this.recipes
          : this.recipes.filter((c) => (
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
            {this.state.query === '' ? (this.recipes.map(result => (
              <RecipeItem
                key={result.title}
                title={result.title}
                ingredients={result.ingredients}
                thumbnail={result.thumbnail}
                href={result.href}
              />
            ))):(
            showingRecipes.length !== this.recipes.length && (
              <div>
                <div className='showing-recipes'>
                  <span>Now showing {showingRecipes.length} of {this.recipes.length} recipes</span>
                  <button onClick={this.clearQuery}>Show all</button> 
                </div>

                <ol className="recipes-grid">
                {showingRecipes.map(result => (
                      <RecipeItem
                      key={result.title}
                      title={result.title}
                      ingredients={result.ingredients}
                      thumbnail={result.thumbnail}
                      href={result.href}
                      />
                ))}
                </ol>
              </div>
          )
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
