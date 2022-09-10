import React, { useEffect, useRef } from 'react';
import gsap, { Linear } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const ref = useRef(null);
  const scrollTriggerProps = { trigger: '.img1', start: 'top 600px', end: 'bottom 380px', scrub: true };

  useEffect(() => {
    gsap.to('.sun-img', {
      rotate: 180,
      scale: 1.3,
      y: 500,
      ease: Linear,
      scrollTrigger: scrollTriggerProps,
    });
    gsap.to('.img1', {
      scale: 1.3,
      scrollTrigger: scrollTriggerProps,
    });
    gsap.to('.img2', {
      y: 30,
      scale: 1.1,
      scrollTrigger: scrollTriggerProps,
    });
    gsap.to('.img3', {
      x: 20,
      scale: 1.1,
      scrollTrigger: scrollTriggerProps,
    });
    gsap.to('.img4', {
      y: 5,
      scale: 1.1,
      scrollTrigger: scrollTriggerProps,
    });
  }, []);

  return (
    <>
      <div className="container-content">
        <div className="container-img">
          <img ref={ref} className="sun-img" src="poto/sun1.png" alt="asd" />
          <img ref={ref} className="img1" src="poto/awan-layer-1.png" alt="mountain" />
          <img ref={ref} className="img2" src="poto/gunung-layer-2.png" alt="mountain" />
          <img ref={ref} className="img3" src="poto/gunung-layer-3.png" alt="mountain" />
          <img ref={ref} className="img4" src="poto/pohon-layer-4.png" alt="mountain" />
        </div>
      </div>
      <div className="gradient-parent">
        <div className="gradient"></div>
      </div>
    </>
  );
};

export default Content;
