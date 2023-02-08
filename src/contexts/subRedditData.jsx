import { createContext, useEffect, useState } from "react";

export const SubRedditDataContext = createContext({
  subData: {},
  setSubData: () => {},
  subImages: [],
  setSubImages: () => null,
  imagesToShow: 3,
  setImagesToShow: () => null,
});

export const SubRedditProvider = ({ children }) => {
  const [subData, setSubData] = useState({});
  const [subImages, setSubImages] = useState([]);
  const [imagesToShow, setImagesToShow] = useState(3);

  const value = {
    subData,
    setSubData,
    subImages,
    imagesToShow,
    setImagesToShow,
  };

  useEffect(() => {
    const posts = subData && subData.data && subData.data.children;
    if (!posts) return;
    const images = Array.isArray(posts)
      ? [
          ...new Set(
            posts
              .map((post) => {
                if (
                  post.data.url.endsWith(".jpg") ||
                  post.data.url.endsWith(".png")
                )
                  return post.data.url;
              })
              .filter((image) => image !== undefined)
          ),
        ]
      : [];

    setSubImages(images);
    setImagesToShow(3);
  }, [subData]);

  return (
    <SubRedditDataContext.Provider value={value}>
      {children}
    </SubRedditDataContext.Provider>
  );
};
