import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/context";
export default function Details() {
  const {
    recipeDetails,
    setRecipeDetails,
    handleAddToFavourites,
    favouritesList,
  } = useContext(GlobalContext);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data && data.data) {
        setRecipeDetails(data.data);
      }
      console.log(recipeDetails);
    }
    getRecipeDetails();
  }, []);

  return (
    <div className=" container  w-3/4 m-auto mt-10 md:m-auto md:mt-10  grid grid-cols-1 lg:grid-cols-2 ">
      <div className="">
        <div className="w-auto h-full overflow-hidden  group">
          <img
            src={recipeDetails?.recipe?.image_url}
            className=" rounded-xl shadow-2xl border-slate-300 border-2 w-full h-full group-hover:scale-105 duration-500"
          />
        </div>
      </div>
      <div className="flex flex-col md:m-4 p-3 font-prompt border-2 border-black">
        <span className=" text-slate-600 font-medium text-lg ">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h4 className="text-black font-semibold text-xl">
          {recipeDetails?.recipe?.title}
        </h4>
        <div>
          <button
            onClick={() => handleAddToFavourites(recipeDetails?.recipe)}
            className=" uppercase font-prompt mt-1 py-2 px-5
           bg-slate-950 hover:bg-slate-800 text-white tracking-wider 
           rounded-md shadow-2xl "
          >
            {favouritesList &&
            favouritesList.length > 0 &&
            favouritesList.findIndex(
              (item) => item.id === recipeDetails?.recipe.id
            ) !== -1
              ? "remove from favourites"
              : "add to favourites"}
          </button>
        </div>
        <div className="mt-1">
          <span className="text-xl md:text-2xl font-semibold">ingredients</span>
          <ul className="gap-1">
            {recipeDetails?.recipe?.ingredients.map((ingredients) => (
              <li className="">
                <span>
                  {ingredients.quantity} {ingredients.unit}{" "}
                </span>
                <span>{ingredients.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
