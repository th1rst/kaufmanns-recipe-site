import React from "react";
import { RecipesContext } from "../context";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/BackgroundImage";
import RecipeSmall from "../components/Recipes/RecipeSmall";

export default function SearchResults(props) {
  const { recipes } = React.useContext(RecipesContext);
  const searchQuery = props.match.params.slug.toLowerCase();

  return (
    <div>
      <BackgroundImage />
      <Navigation />
      <div className="recipe-list-container">
        <div className="recipe-list-heading-row">
          <p className="recipe-list-heading">
            Suchergebnisse für "{props.match.params.slug}"
          </p>
        </div>
        <div className="divider-small"></div>
        {recipes.map((recipe) =>
          recipe.name.toLowerCase().includes(searchQuery) && !recipe.article ? (
            <div className="recipe-list-entry">
              <RecipeSmall
                name={recipe.name}
                preparation={recipe.preparation.substr(0, 400)}
                images={recipe.images.map((image) => image)}
                timeNeeded={recipe.timeNeeded}
                difficulty={recipe.difficulty}
                servings={recipe.servings}
                cookingTime={recipe.cookingTime}
                slug={recipe.slug}
                key={recipe.slug}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
