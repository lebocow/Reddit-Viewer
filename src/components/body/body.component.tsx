import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { SubRedditDataContext } from "../../contexts/subRedditData.context";
import PhotoCard from "../photoCard/photoCard.component";

const Body: FC = () => {
  const { subImages } = useContext(SubRedditDataContext);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [imagesToShow, setImagesToShow] = useState(0);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setImagesToShow((prevValue) => prevValue + 4);
          }
        },
        {
          threshold: 1,
          rootMargin: "200px",
        }
      );
      observerRef.current.observe(document.querySelector(".observe-me")!);
    }

    return () => {
      observerRef.current && observerRef.current.disconnect;
    };
  }, []);

  return (
    <div className="p-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {subImages.slice(0, imagesToShow).map((image) => (
          <PhotoCard key={image} image={image} />
        ))}
        <div className="observe-me" />
      </div>
    </div>
  );
};

export default Body;
