// import React from 'react'
// import photo from "../assets/confrence.jpg"
import style from "../styles/Photos.module.css";

import { useEffect } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const photo = [
  {
    title: "confrence",
    src: "./confrence.jpg",
  },
  {
    title: "team",
    src: "./team.jpg",
  },
  {
    title: "biology",
    src: "./biology.webp",
  },
  {
    title: "surgery",
    src: "./surgery.webp",
  },
  {
    title: "gas PipeLine",
    src: "./gasPipeLine.jpg",
  },
];
function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % photo.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#img",
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "sine.out",
      }
    );
  }, [currentIndex]);

  return (
    <div className={style.photos}>
      <img id="img" src={photo[currentIndex].src} alt={photo[0].title} />
    </div>
  );
}

export default Photos;
