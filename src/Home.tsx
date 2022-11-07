import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function useYearsAtCompany() {
  return 5;
}

function About() {
  const yearsAtIG = useYearsAtCompany();
  return (
    <>
      <article className="about">
        I've been and engineer at Instagram for {yearsAtIG} years doing release
        and developer experience.
      </article>
      <article className="about">
        On my own I run a home networks with 5 rpis + proxmox vm.
      </article>
      <article className="about">
        If it's not being continually built and released is it even real
        anymore?
      </article>
    </>
  );
}

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
    </div>
  );
}

export default Home;
