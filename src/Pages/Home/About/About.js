import React from 'react';
import about from '../../../assets/images/about.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-20">
  <div className="hero-content flex-col lg:flex-row">
    <img src={about} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">MD ATIKUL ISLAM</h1>
      <p className="py-6">It is profound honor as a photographer to witness people falling in love, making memories. I have always been fascinated by the poetic condition of twilight. By its transformative quality. Its power of turning the ordinary into something magical and otherworldly.</p>
      <button className="btn btn-primary">Hire Me</button>
    </div>
  </div>
</div>
    );
};

export default About;