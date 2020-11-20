import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Navigation from "../components/Navigation";
import RecipeSmall from "../components/Recipes/RecipeSmall";
import Footer from "../components/Footer";
import { RecipesContext } from "../context";
import { categoryList } from "../assets/data/categoryList";

export default function Category(props) {
  const { recipes } = React.useContext(RecipesContext);

  return (
    <div>
      <BackgroundImage />
      <Navigation />
      {categoryList.map((category) =>
        category.slug === props.match.params.slug ? (
          <div className="recipe-list-container">
            <div className="recipe-list-heading-row">
              <p className="recipe-list-heading">
                Alle Rezepte der Kategorie "{category.name}":
              </p>
            </div>
            <div className="divider-small" />
            {recipes.map((recipe) =>
              recipe.dish_category === `${category.name}` ? (
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
              ) : category.name === "Alle Rezepte" ? (
                !recipe.article ? (
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
              ) : null
            )}
          </div>
        ) : null
      )}

      <Footer />
    </div>
  );
}
