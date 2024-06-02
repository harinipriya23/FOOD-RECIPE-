import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
export default function NavBar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);
  console.log(searchParams);
  return (
    <div>
      <div className="grid grid-flow-row md:grid-cols-3 lg:grid-cols-4">
        <div className="">
          <h1
            className=" flex justify-between m-4 font-prompt text-slate-600
           capitalize text-2xl font-semibold"
          >
            FoodRecipe
            <MdMenu className="md:hidden" />
          </h1>
        </div>
        <div>
          <form className="grid" onSubmit={handleSubmit}>
            <input
              value={searchParams}
              onChange={(e) => {
                setSearchParams(e.target.value);
              }}
              className="relative font-prompt outline-none
             focus:shadow-slate-400 cursor-pointer px-9 mx-4 shadow-lg 
             py-2 capitalize text-md text-slate-900 rounded-3xl
             md:m-3 md:px-10 "
              placeholder="search"
              name="search"
              type="text"
            />
            <FaSearch
              className=" md:my-6 absolute w-8 h-4 my-3 mx-5
           text-slate-700"
            />
          </form>
        </div>
        <div>
          <MdMenu className="hidden md:flex ml-64 mt-5 size-6 lg:hidden " />
        </div>
        <div>
          <ul
            className="lg:flex hidden gap-5 font-prompt 
            text-slate-600 font-semibold "
          >
            <li className="flex mt-5 gap-1">
              <FaHome className="mt-1" />
              <NavLink to={"/"} className="hover:text-black duration-500">
                Home
              </NavLink>
            </li>
            <li className="flex mt-5">
              <NavLink to={"/favourites"} className="hover:text-black">
                Favourites
              </NavLink>
            </li>
            <li className="flex mt-5 gap-1">
              <BiLogIn className="mt-1 w-4 " />
              <NavLink to={"/signin"}
              className="hover:text-black duration-500">sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
