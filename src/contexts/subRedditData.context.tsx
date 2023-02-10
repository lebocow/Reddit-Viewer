import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";

type SubDataType = {
  data: {
    children: {
      data: {
        url: string;
      };
    }[];
  };
};

type SubRedditDataContextProps = {
  subData: SubDataType;
  setSubData: (data: SubDataType) => void;
  subImages: string[];
  setSubImages: (images: string[]) => void;
};

export const SubRedditDataContext = createContext<SubRedditDataContextProps>({
  subData: {
    data: {
      children: [],
    },
  },
  setSubData: () => {},
  subImages: [],
  setSubImages: () => [],
});

type SubRedditProviderProps = {
  children: ReactNode;
};

export const SubRedditProvider: FC<SubRedditProviderProps> = ({ children }) => {
  const [subData, setSubData] = useState<SubDataType>({
    data: {
      children: [],
    },
  });
  const [subImages, setSubImages] = useState<string[]>([]);

  const value: SubRedditDataContextProps = {
    subData,
    setSubData,
    subImages,
    setSubImages,
  };

  useEffect(() => {
    const posts = subData && subData.data && subData.data.children;
    if (!posts) return;
    const images = [
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
    ] as string[];
    setSubImages(images);
  }, [subData]);

  return (
    <SubRedditDataContext.Provider value={value}>
      {children}
    </SubRedditDataContext.Provider>
  );
};
