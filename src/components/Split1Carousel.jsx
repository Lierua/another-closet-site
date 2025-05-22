/***import React, { useEffect, useState } from "react";

const images = ["/assets/acsplit3.svg", "/assets/acsplit4.svg", "/assets/acsplit5.svg"];

export default function Split1Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((img, idx) => (
        <img key={idx} src={img} alt={`Slide ${idx + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`} />
      ))}
    </div>
  );
} */
