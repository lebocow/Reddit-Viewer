import React, { FC } from "react";

type PhotoCardProps = {
  image: string;
};

const PhotoCard: FC<PhotoCardProps> = ({ image }) => {
  return (
    <div className="mx-auto shadow-2xl">
      <img
        className="h-96 w-full sm:h-[30rem] md:h-[35rem] object-cover "
        src={image}
      />
    </div>
  );
};

export default PhotoCard;
