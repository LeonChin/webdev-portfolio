import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a passionate Full-Stack Developer with over four years of
            experience in frontend and backend technologies, including React,
            Node.js, TypeScript, and MongoDB. With a strong focus on building
            scalable, user-centric applications, I thrive on solving complex
            challenges and delivering impactful solutions. Beyond coding, I
            practice CrossFit to push my limits and embrace challenges,
            constantly striving for personal growth. I also enjoy woodworking,
            where I channel my dedication to perfection and cultivate a
            craftsman’s mindset. This balance between technical expertise and
            hands-on creativity reflects my commitment to both innovation and
            precision in everything I do.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
