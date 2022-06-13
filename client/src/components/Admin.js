import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
      <section>
        <h1>Admins Page</h1>
        <br />
        <p>You must have been assigned an Admin role.</p>
        <div className="flexGrow">
          <Link to="/">Home</Link>
        </div>
      </section>
    </div>
  );
}

export default Admin;
