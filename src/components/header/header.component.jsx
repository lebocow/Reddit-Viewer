import { useContext } from "react";
import RedditLogo from "../../assets/logo-reddit.svg";
import { InputContext } from "../../contexts/input.context";
import { UserDataContext } from "../../contexts/userData.context";
import { fetchUserData } from "../../utils/fetchUserData.utils";

const Header = () => {
  const { searchInput, setSearchInput } = useContext(InputContext);
  const { setCurrentData } = useContext(UserDataContext);

  const onChangeHandler = (e) => {
    const input = e.target.value;
    setSearchInput(input);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await fetchUserData(searchInput);
    setCurrentData(data);
  };

  return (
    <div className="flex flex-row p-2">
      <img className="w-12 h-12" src={RedditLogo} />
      <div className="flex justify-center items-center w-full">
        <form onSubmit={submitHandler}>
          <input
            className="text-center rounded-xl w-96 outline-none"
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
