import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
export default function NavBar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div className="grid grid-flow-row md:grid-cols-3">
      <div
        className=" flex justify-between items-center m-5 font-prompt text-slate-600
           capitalize font-semibold"
      >
        <h1 className="text-2xl">FoodRecipe</h1>
        <ul className="flex md:hidden gap-5 ">
          <li className="flex gap-1">
            <FaHome className="mt-1" />
            <NavLink to="/" className="hover:text-black duration-500">
              Home
            </NavLink>
          </li>
          <li className="flex gap-1">
            <BsHeartFill className="mt-1" />
            <NavLink to="/favourites" className="hover:text-black">
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
      <form className="grid" onSubmit={handleSubmit}>
        <input
          value={searchParams}
          onChange={(e) => {
            setSearchParams(e.target.value);
          }}
          className="relative font-prompt outline-none
             focus:shadow-slate-400 cursor-pointer px-9 mx-4 shadow-xl
             py-2 capitalize text-md text-slate-900 rounded-lg 
             md:m-3 md:px-10 "
          placeholder="search"
          name="search"
          type="text"
        />
        <FaSearch
          className=" md:mt-[27px] absolute text-[18px] mt-3 mx-7
           text-slate-600"
        />
      </form>
      <ul
        className=" hidden md:flex gap-5 font-prompt 
            text-slate-600 font-semibold md:mx-14 "
      >
        <li className="flex mt-5 gap-1">
          <FaHome className="mt-1" />
          <NavLink to="/" className="hover:text-black duration-500">
            Home
          </NavLink>
        </li>
        <li className="flex mt-5 gap-1">
          <BsHeartFill className="mt-1" />
          <NavLink to="/favourites" className="hover:text-black">
            Favourites
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
