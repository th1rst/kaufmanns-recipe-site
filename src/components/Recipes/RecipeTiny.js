import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

export default function RecipeTiny(props) {
  const { name, images, slug } = props;

  return (
    <Link to={`/rezepte/${slug}`} style={{ textDecoration: "none" }}>
      <div className="recipe-tiny-container">
        <div className="recipe-tiny-row-1">
          {!images[0] ? (
            <Loading />
          ) : (
            <img
              className="recipe-tiny-image"
              src={`https:${images[0]}`}
              alt={`${slug}`}
            ></img>
          )}
        </div>
        <div className="recipe-tiny-row-2">
          <p className="recipe-tiny-heading">{name}</p>
        </div>
      </div>
    </Link>
  );
}
