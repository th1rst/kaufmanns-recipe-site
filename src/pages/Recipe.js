import React, { Component } from 'react'
import { RecipesContext } from "../context"

export default class Recipe extends Component {
    static contextType = RecipesContext;  
    render() {
        const {recipes, fetched} = this.context
      
        return (
            <div>
                hello {console.log(recipes, fetched)} from recipe.js!
            </div>
        )
    }
}
