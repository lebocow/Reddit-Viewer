import { useState } from "react";
import RedditLogo from "../../assets/logo-reddit.svg";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    return await fetch("/.netlify/functions/fetch-images", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: searchInput }),
    }).then((res) => res.json());
  };

  const onChangeHandler = (e) => {
    const input = e.target.value;
    setSearchInput(input);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const images = await fetchImages();
    console.log(images);
  };

  return (
    <div className="flex flex-row p-2">
      <img className="w-12 h-12" src={RedditLogo} />
      <div className="flex justify-center items-center w-full">
        <form onSubmit={submitHandler}>
          <input
            className="text-center border rounded-xl w-96 "
            type="search"
            placeholder="u/username"
            onChange={onChangeHandler}
            value={searchInput}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
