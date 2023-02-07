import { useEffect } from "react";

const Body = () => {
  useEffect(() => {});

  return (
    <div className="border p-7">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {/* {data.map((image) => (
          <div className="h-full w-auto p-2 mx-auto border">
            <img className="object-fill" src={image} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Body;
