import React from 'react';
import img1 from '../../../assets/images/banner/wedding.jpg'

const Banner = () => {
    return (
<div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold mb-20">Best picture & video in an affordable package</h1>
      <p className="mb-20">Capturing moments from today... Creating memories for a lifetime. <br />
      Photography & Cinematography for me, a spontaneous impulse that comes from an ever-attentive eye, which captures the moment and its eternity.</p>
      <button className="btn btn-primary">See all Services</button>
    </div>
  </div>
</div>

    );
};

export default Banner;