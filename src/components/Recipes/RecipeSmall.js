import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { GiSpoon, GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import Loading from "../Loading";

export default function RecipeSmall(props) {
  const {
    name,
    preparation,
    images,
    timeNeeded,
    difficulty,
    servings,
    slug,
    cookingTime,
  } = props;

  const getDuration = (minutes) => {
    if (minutes < 60) {
      return `${minutes} Minuten`;
    } else if (Math.floor(minutes / 60) === 1) {
      return "1 Stunde";
    } else {
      return `${Math.floor(minutes / 60)} Stunden`;
    }
  };

  return (
    <Link to={`/rezepte/${slug}`} style={{ textDecoration: "none" }}>
      <div className="recipe-small-container">
        <div className="recipe-small-column-1">
          {!images[0] ? (
            <Loading />
          ) : (
            <img
              className="recipe-small-image"
              src={`https:${images[0]}`}
              alt={`${slug}`}
            />
          )}
        </div>
        <div className="recipe-small-column-2">
          <div className="recipe-small-row-1">
            <p className="recipe-small-heading">{name}</p>
          </div>
          <div className="recipe-small-row-2">
            <p className="recipe-small-text">{preparation} ...mehr</p>
          </div>
          <div className="recipe-small-row-3">
            <div className="row-inner-container">
              <BsClockHistory className="recipe-icon-small" />
              <p className="recipe-subheading-small">Zeit: </p>
              <p className="recipe-subheading-small">
                {getDuration(timeNeeded)}
                {cookingTime ? ` + ${getDuration(cookingTime)}` : null}
              </p>
            </div>
            <div className="row-inner-container">
              <GiSpoon className="recipe-icon-small" />
              <p className="recipe-subheading-small">Schwierigkeit: </p>
              <p className="recipe-subheading-small">{difficulty} von 4</p>
            </div>
            <div className="row-inner-container">
              <GiKnifeFork className="recipe-icon-small" />
              <p className="recipe-subheading-small">Portionen: </p>
              <p className="recipe-subheading-small">{servings}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
