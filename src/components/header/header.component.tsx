import React, { ChangeEvent, useContext } from "react";
import RedditLogo from "../../assets/logo-reddit.svg";
import { InputContext } from "../../contexts/input.context";
import { SubRedditDataContext } from "../../contexts/subRedditData.context";
import { fetchSubRedditData } from "../../utils/fetchSubRedditData.utils";

const Header = () => {
  const { searchInput, setSearchInput } = useContext(InputContext);
  const { setSubData } = useContext(SubRedditDataContext);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchInput(input);
  };

  const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await fetchSubRedditData(searchInput);
    setSubData(data);
  };

  return (
    <div className="flex flex-row p-2">
      <img className="w-12 h-12" src={RedditLogo} />
      <div className="flex justify-center items-center w-full">
        <form onSubmit={submitHandler}>
          <input
            className="text-center rounded-xl w-96 outline-none"
            type="search"
            placeholder="r/subreddit"
            onChange={onChangeHandler}
            value={searchInput}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
