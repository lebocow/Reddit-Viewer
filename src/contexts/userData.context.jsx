import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext({
  userData: {},
  setCurrentData: () => {},
  userImages: [],
  setUserImages: () => null,
  imagesToShow: 3,
  setImagesToShow: () => null,
});

export const UserDataProvider = ({ children }) => {
  const [userData, setCurrentData] = useState({});
  const [userImages, setUserImages] = useState([]);
  const [imagesToShow, setImagesToShow] = useState(3);

  const value = {
    userData,
    setCurrentData,
    userImages,
    imagesToShow,
    setImagesToShow,
  };

  useEffect(() => {
    const posts = userData && userData.data && userData.data.children;
    if (!posts) return;
    const images = Array.isArray(posts)
      ? [
          ...new Set(
            posts
              .map((post) => {
                if (
                  post.data.url.endsWith(".jpg") ||
                  post.data.url.endsWith(".png") ||
                  post.data.url.endsWith(".gifv")
                )
                  return post.data.url;
              })
              .filter((image) => image !== undefined)
          ),
        ]
      : [];

    setUserImages(images);
    setImagesToShow(3);
  }, [userData]);

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
