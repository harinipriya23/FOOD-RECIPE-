import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/context";
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
      if (data && data.data) {
        setRecipeDetails(data.data);
      }
      console.log(recipeDetails);
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="my-10 mx-20 flex flex-col md:flex-row justify-center items-center 
   border-2 border-white bg-slate-300 shadow-lg shadow-white py-10 gap-5">
      <div className="md:mx-10">
          <img
            src={recipeDetails?.recipe?.image_url}
          className="w-96 h-96 md:h-56 hover:scale-105 duration-300
           border-2 border-slate-200 shadow-xl mx-5
         md:border-none "
          />
        </div>
      <div className="flex flex-col px-10 font-prompt">
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
              <li key={ingredients.id}>
                <span>
                  {ingredients.quantity} {ingredients.unit}
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
