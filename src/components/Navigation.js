import React, { useState, useEffect } from "react";
import { RecipesContext } from "../context";
import {
  NavDropdown,
  FormControl,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { categoryList } from "../assets/data/categoryList";

export default function Navigation() {
  const [searchInput, setSearchInput] = useState("");
  const [slide, setSlide] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const { recipes } = React.useContext(RecipesContext);
  const history = useHistory();

  //make navbar disappear on scroll down / re-appear on scroll up
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setLastScrollY(currentScrollY);
    currentScrollY > lastScrollY ? setSlide("-200px") : setSlide("0px");
  };

  const handleEnterKey = (key) => {
    if (key === "Enter") {
      history.push(`/suche/${searchInput}`);
    }
  };

  const getRandomRecipe = () => {
    const allowedRecipes = recipes.filter(
      (recipe) => recipe.dish_category !== ("article" && "Saucen / Dips")
    );
    const randomNumber = Math.floor(Math.random() * allowedRecipes.length);
    const randomRecipeSlug = allowedRecipes[randomNumber].slug;
    history.push(`/rezepte/${randomRecipeSlug}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {/* ----- DESKTOP NAVBAR ----- */}
      <div
        className="navbar-container"
        style={{
          transform: `translate(0, ${slide})`,
          transition: "transform 120ms linear",
        }}
      >
        <Link to={"/"} style={{ zIndex: "5" }}>
          <img
            src={require("../images/logo_small2.png")}
            className="navbar-logo"
            alt="kaufmann-logo"
          />
        </Link>
        <div className="navbar-item navbar-first">
          <FormControl
            type="text"
            placeholder="Suchen..."
            className="sm-2 search-form"
            //autoFocus={true}
            onKeyDown={(e) => handleEnterKey(e.key)}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Link to={`/suche/${searchInput}`}>
            <FaSearch
              className="search-icon"
              style={{ width: "1.5em", height: "45%", margin: "1vw" }}
            />
          </Link>
        </div>
        <div className="navbar-item">
          <NavDropdown
            title="Kategorien"
            id="nav-dropdown-kategorien"
            style={{ transform: "0ms !important" }}
          >
            {categoryList.map((category) => {
              return (
                <NavDropdown.Item as={Link} to={`/kategorie/${category.slug}`}>
                  {category.name}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </div>
        <div className="navbar-item" onClick={getRandomRecipe}>
          Zufallsrezept
        </div>
        <div className="navbar-item">
          <NavDropdown title="Artikel" id="nav-dropdown-artikel">
            {recipes.map((recipe) =>
              recipe.article ? (
                <NavDropdown.Item as={Link} to={`/artikel/${recipe.slug}`}>
                  {recipe.name}
                </NavDropdown.Item>
              ) : null
            )}
          </NavDropdown>
        </div>

        <div className="navbar-item">
          <NavDropdown title="Über" id="nav-dropdown-artikel">
            <NavDropdown.Item as={Link} to={`/ueber_den_autor`}>
              Über den Autor
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/ueber_die_webseite`}>
              Über die Webseite
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      {/* ----- MOBILE NAVBAR -----*/}
      <div
        className="mobile-navbar-container"
        style={{
          transform: `translate(0, ${slide})`,
          transition: "transform 120ms linear",
        }}
      >
        <div className="mobile-navbar-heading">
          <AiOutlineAlignLeft
            className="navbar-expand-icon"
            onClick={() => setOpen(!open)}
          />
          <Link to={"/"} style={{ width: "100%", textDecoration: "none" }}>
            <div className="mobile-logo-container">
              <p className="mobile-logo-heading">Kaufmanns</p>
              <p className="mobile-logo-subheading">Spitzen-Rezeptsammlung</p>
            </div>
          </Link>
        </div>
        <div
          className={
            open
              ? "mobile-navbar-items-container show"
              : "mobile-navbar-items-container"
          }
        >
          <div className="mobile-search-container">
            <FormControl
              type="text"
              placeholder="Suchen..."
              className="mobile-search-form"
              onKeyDown={(e) => handleEnterKey(e.key)}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Link to={`/suche/${searchInput}`}>
              <Button
                className="mobile-search-button"
                variant="outline-success"
              >
                Suchen
              </Button>
            </Link>
          </div>
          <div className="divider-large" />
          <div className="mobile-dropdown-container">
            <Accordion>
              <Card className="mobile-dropdown-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    style={{ textAlign: "center" }}
                  >
                    Kategorien
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body id="nav-card-body">
                    {categoryList.map((category) => (
                      <div className="card-entry">
                        <Link to={`/kategorie/${category.slug}`}>
                          {category.name}
                        </Link>
                      </div>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="divider-large" />
          <div className="mobile-dropdown-container">
            <p className="mobile-navbar-link" onClick={() => getRandomRecipe()}>
              Zufallsrezept
            </p>
          </div>
          <div className="divider-large" />
          <div className="mobile-dropdown-container">
            <Accordion>
              <Card className="mobile-dropdown-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    style={{ textAlign: "center" }}
                  >
                    Artikel
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body id="nav-card-body">
                    {recipes.map((recipe) =>
                      recipe.article ? (
                        <div className="card-entry">
                          <Link to={`/artikel/${recipe.slug}`}>
                            {recipe.name}
                          </Link>
                        </div>
                      ) : null
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="divider-large" />
          <div className="mobile-dropdown-container">
            <Accordion>
              <Card className="mobile-dropdown-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="2"
                    style={{ textAlign: "center" }}
                  >
                    Über
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body id="nav-card-body">
                    <div className="card-entry">
                      <Link to={"/ueber_den_autor"}>Über den Autor</Link>
                    </div>
                    <div className="card-entry">
                      <Link to={"/ueber_die_webseite"}>Über die Webseite</Link>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="divider-large" />
        </div>
      </div>
    </>
  );
}
