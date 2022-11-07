import React from "react";

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
        On my own I run a home network with 5 rpis + proxmox vm running
        everything from qemu to nomad and k8s. It's where I play around and
        learn the latest in FOSS infra software.
      </article>
      <article className="about">
        If it's not being continually built and released is it even real
        anymore?
      </article>
      <article className="about">
        The resume is coming, for now just lots of blurbs.
      </article>
      <article className="about">
        Here's my <a href="https://github.com/7imbrook">GitHub</a>
      </article>
    </>
  );
}

export default About;
