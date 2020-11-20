import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SingleRecipe from "./pages/SingleRecipe"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import SearchResults from "./pages/SearchResults"
import Article from "./pages/Article"
import 'bootstrap/dist/css/bootstrap.min.css';
import DataPrivacy from './pages/DataPrivacy';
import Imprint from './pages/Imprint';
import Contact from './pages/Contact';
import About from './pages/About';
import Website from './pages/Website';
import Category from './components/Category';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/kategorie/:slug" component={Category} />
      <Route exact path="/rezepte/:slug" component={SingleRecipe} />
      <Route exact path="/suche/:slug" component={SearchResults} />
      <Route exact path="/artikel/:slug" component={Article} />
      <Route exact path="/datenschutz" component={DataPrivacy} />
      <Route exact path="/impressum" component={Imprint} />
      <Route exact path="/kontakt" component={Contact} />
      <Route exact path="/ueber_den_autor" component={About} />
      <Route exact path="/ueber_die_webseite" component={Website} />
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
