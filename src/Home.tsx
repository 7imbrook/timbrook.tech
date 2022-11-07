import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";

function Home() {
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
      <footer>
        Email: <a href="mailto:timbrook480@gmail.com">timbrook480@gmail.com</a>
      </footer>
    </div>
  );
}

export default Home;
