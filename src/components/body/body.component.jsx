import { useContext, useEffect, useRef, useState } from "react";
import { UserDataContext } from "../../contexts/userData.context";
import PhotoCard from "../photoCard/photoCard.component";

const Body = () => {
  const { userImages, imagesToShow, setImagesToShow } =
    useContext(UserDataContext);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setImagesToShow((prevImagesToShow) => prevImagesToShow + 3);
          }
        },
        {
          threshold: 1,
          rootMargin: "200px",
        }
      );
    }
    observerRef.current.observe(document.querySelector(".observe-me"));
    return () => observerRef.current;
  }, []);

  return (
    <div className="p-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {userImages.slice(0, imagesToShow).map((image) => (
          <PhotoCard key={image} image={image} />
        ))}
        <div className="observe-me" />
      </div>
    </div>
  );
};

export default Body;
