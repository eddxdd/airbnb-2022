import React from "react";
import { Link } from "react-router-dom";

function Editor() {
  return (
    <div className="editor">
      <section>
        <h1>Editors Page</h1>
        <br />
        <p>You must have been assigned an Editor role.</p>
        <div className="flexGrow">
          <Link to="/">Home</Link>
        </div>
      </section>
    </div>
  );
}

export default Editor;
