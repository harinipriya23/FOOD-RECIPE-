import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import RecipeItem from "./RecipeDetails";

export default function Home() {
  const { loading, recipeData } = useContext(GlobalContext);
  
  if (loading) {
    <div className=" text-xl lg:text-2xl font-extrabold font-prompt capitalize text-center ">
      Loading recipes.. please wait
    </div>;
  }
  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {recipeData && recipeData.length > 0 ? (
          recipeData.map((item, index) => <RecipeItem key={index} item={item} />)
        ) : (
          <div>
            <h1 className="text-xl m-10 text-slate-600 lg:text-3xl font-extrabold font-prompt capitalize text-center">
              no recipe items found..
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
