const PhotoCard = ({ image }) => {
  return (
    <div className="mx-auto shadow-2xl">
      <img className="h-[45rem] w-[35rem]" src={image} />
    </div>
  );
};

export default PhotoCard;
