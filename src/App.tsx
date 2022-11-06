import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        Michael Timbrook <sub>Software Engineer</sub>
        <article>
          No links, only <Link to="/about">vibes.</Link>
        </article>
      </header>
    </div>
  );
}

export default App;
