// import React, { useState } from '
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import style from "../styles/Clients.module.css"


const logos = [
  "./confrence.jpg",
  "./team.jpg",
  "./confrence.jpg",
  "./team.jpg",
  "./confrence.jpg",
  "./team.jpg",
  "./confrence.jpg",
  "./team.jpg",
  "./confrence.jpg",
  "./team.jpg",
];
const Clients = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2; // Because we duplicate the logos

    tweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}`, // move left by total width
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.resume();

  return (
    <div className={style.main}>
        <div className={style.heading}>
             <img src="https://mddmedical.com/images/client.jpg" alt="" />
        </div>
    <div className={style.slider} onMouseEnter={pause} onMouseLeave={resume}>
      <div className={style.slidertrack} ref={trackRef}>
        {[...logos, ...logos].map((logo, index) => (
          <div className={style.slide} key={index}>
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Clients