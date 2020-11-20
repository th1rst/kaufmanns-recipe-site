import React, { useEffect, useState } from "react";

const RecipesContext = React.createContext();

export default function RecipesProvider(props) {
  const [recipes, setRecipes] = useState([]);

  const fetchData = () => {
    const contentful = require("contentful");
    const API_KEY = process.env.REACT_APP_CONTENTFUL_RECIPE_API_KEY;
    const client = contentful.createClient({
      space: "9eq7letzz02f",
      accessToken: `${API_KEY}`,
    });
    client
      .getEntries({ limit: 200, content_type: "recipe" })
      .then((entry) => {
        setRecipes(formatData(entry));
      })
      .catch((error) => console.log(error));
  };

  const formatData = (entry) => {
    console.log("ASD");
    let tempItems = entry.items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let recipe = { ...item.fields, images, id };
      return recipe;
    });
    return tempItems;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
}

const RecipesConsumer = RecipesContext.Consumer;

export { RecipesProvider, RecipesConsumer, RecipesContext };
