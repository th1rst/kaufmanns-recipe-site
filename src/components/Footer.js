import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <Link to={"/kontakt"}>
          <p className="footer-text">Kontakt</p>
        </Link>
      </div>
      <div className="footer-inner">
        <Link to={"/impressum"}>
          <p className="footer-text">Impressum</p>
        </Link>
      </div>
      <div className="footer-inner">
        <Link to={"/datenschutz"}>
          <p className="footer-text">Datenschutzerklärung</p>
        </Link>
      </div>
    </footer>
  );
}
