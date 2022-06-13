import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Unauthorized.css";

function Unauthorized() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div className="unauthorized">
      <section className="unauthorized__section">
        <h1>Unauthorized</h1>
        <br />
        <p>You do not have access to the requested page.</p>
        <div className="flexGrow">
          <button className="unauthorized__button" onClick={goBack}>
            Go Back
          </button>
        </div>
      </section>
    </div>
  );
}

export default Unauthorized;
