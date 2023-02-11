import React, { ChangeEvent, FormEvent, useContext } from "react";
import RedditLogo from "../../assets/logo-reddit.svg";
import Search from "../../assets/search.svg";
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

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await fetchSubRedditData(searchInput);
    setSubData(data);
  };

  const submitHandlerImage = async () => {
    const data = await fetchSubRedditData(searchInput);
    setSubData(data);
  };

  return (
    <div className="flex flex-row p-2">
      <div>
        <img className="w-12 h-12" src={RedditLogo} />
      </div>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={submitHandler}>
          <div className="flex rounded-xl bg-slate-50">
            <input
              className="text-center rounded-xl outline-none placeholder:font-thin sm:w-96 bg-slate-50"
              type="text"
              placeholder="r/subreddit"
              onChange={onChangeHandler}
              value={searchInput}
            />
            <img
              className="w-10 cursor-pointer p-1 hover:scale-105 duration-200"
              onClick={submitHandlerImage}
              src={Search}
              alt=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
