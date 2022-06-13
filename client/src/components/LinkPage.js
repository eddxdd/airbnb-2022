import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/LinkPage.css";

function LinkPage() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div className="linkPage">
      <section className="linkPage__section">
        <h1>Links</h1>
        <br />
        <h2>Public</h2>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <br />
        <h2>Private</h2>
        <Link to="/">Home</Link>
        <Link to="/editor">Editors Page</Link>
        <Link to="/admin">Admin Page</Link>
        <button className="unauthorized__button" onClick={goBack}>
          Go Back
        </button>
      </section>
    </div>
  );
}

export default LinkPage;
