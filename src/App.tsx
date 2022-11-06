import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function About() {
  return <article>Let me deploy your shit</article>;
}

function App() {
  return (
    <div>
      <header>
        Michael Timbrook <sub>Software Engineer</sub>
        <article>
          No links, <Link to="/about">Hire me.</Link>
        </article>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
