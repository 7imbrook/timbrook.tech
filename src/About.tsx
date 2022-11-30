import React from "react";

function useYearsAtCompany() {
  return 5;
}

function About() {
  const yearsAtIG = useYearsAtCompany();
  return (
    <>
      <article className="about">
        I've been an engineer at Instagram for {yearsAtIG} years doing release
        and developer experience. As well as working on core messaging stack and communities.
      </article>
      <article className="about">
        On my own I run a home network with 5 rpis + proxmox vm running
        everything from qemu to nomad and k8s. It's where I play around and
        learn the latest in FOSS infra software.
      </article>
      <article className="about">
        "I think Michael has the unique mix of enthusiasm, technical skills, and context 
        to be able to take infrastructure and projects from our team and surface them to developers 
        in a delightful way, and the ability to bring back the needs of developers and use that to 
        influence our priorities." ~My Team
      </article>
      <article className="about">
        If it's not being continually built and released is it even real
        anymore?
      </article>
      <article className="about">
        "Working with Michael has also helped me become more confident in 
        working in areas I'm not super familiar with. Hearing how he iterates
        and takes on work that he has less/no experience in and how he approaches 
        that has really helped me when I face similar situations." ~My Team
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
