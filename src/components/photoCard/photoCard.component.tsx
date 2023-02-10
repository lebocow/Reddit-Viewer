import React, { FC } from "react";

type PhotoCardProps = {
  image: string;
};

const PhotoCard: FC<PhotoCardProps> = ({ image }) => {
  return (
    <div className="mx-auto shadow-2xl">
      <img className="h-[45rem] w-[35rem]" src={image} />
    </div>
  );
};

export default PhotoCard;
